import { Request, Response } from "express";
import { Product } from "../db/models/product";
import { Category } from "../db/models/category";
import { User } from "../db/models/user";
import { SubCategory } from "../db/models/subcategory";
import { Condition, Status } from "../interfaces/thriftease-interface";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const allProducts = await Product.findAll({
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["id", "name"],
        },
        {
          model: User,
          as: "user",
          attributes: ["id", "name", "email"],
        },
        {
          model: SubCategory,
          as: "subCategory",
          attributes: ["id", "name"],
        },
      ],
    });

    if (!allProducts || allProducts.length === 0) {
      res.status(404).json({ message: "No products found" });
      return;
    }
    res.status(200).json({ success: true, products: allProducts });
  } catch (err) {
    console.error("Error: ", err);
  }
};

const getCategoryProducts = async (req: Request, res: Response) => {
  try {
    const { categoryName } = req.params;
    const nameArr = categoryName.split("-");

    nameArr[1] = "&";
    let newArr: string[] = [];

    nameArr.forEach((item) => {
      const capitalized = item.charAt(0).toUpperCase() + item.slice(1);
      newArr.push(capitalized);
    });

    const cateName = newArr.join(" ");

    const categoryProducts = await Product.findAll({
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["id", "name"],
        },
        {
          model: User,
          as: "user",
          attributes: ["id", "name", "email"],
        },
        {
          model: SubCategory,
          as: "subCategory",
          attributes: ["id", "name"],
        },
      ],
      where: {
        "$category.name$": cateName,
      },
    });
    if (!categoryProducts || categoryProducts.length === 0) {
      res.status(404).json({ message: "No products found" });
      return;
    }
    res.status(200).json({ success: true, products: categoryProducts });
  } catch (err) {
    console.error("Error: ", err);
  }
};

const getAProduct = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;
    const product = await Product.findByPk(productID);
    if (!product) {
      res.status(404).json({ message: "No products found" });
      return;
    }
    res.status(200).json({ success: true, products: product });
  } catch (err) {
    console.error("Error: ", err);
  }
};

const createNewProduct = async (req: Request, res: Response) => {
  try {
    const {
      id,
      name,
      categoryId,
      subCategoryId,
      ownerId,
      price,
      description,
      negotiable,
      condition,
      location,
      status,
      deliveryOptions,
    } = req.body;

    const category = await Category.findByPk(categoryId);
    if (!category) {
      res.status(404).json({ message: "Category not found" });
      return;
    }

    const subCategory = await SubCategory.findByPk(subCategoryId);
    if (!subCategory) {
      res.status(404).json({ message: "Sub-Category not found" });
      return;
    }

    const user = await User.findByPk(ownerId);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    if (!Object.values(Condition).includes(condition)) {
      res.status(400).json({ message: "Invalid product condition." });
      return;
    }

    if (!Object.values(Status).includes(status)) {
      res.status(400).json({ message: "Invalid product status." });
      return;
    }

    const newProduct = await Product.create({
      id,
      name,
      categoryId,
      subCategoryId,
      ownerId,
      price,
      description,
      negotiable,
      condition,
      location,
      status,
      deliveryOptions,
    });

    if (!newProduct) {
      res.status(404).json({ message: "Product Not Created" });
      return;
    }
    res.status(200).json({ success: true, products: newProduct });
  } catch (err) {
    console.error("Error: ", err);
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;
    const { id, name, categoryId, ownerId, price } = req.body;
    const productExists = await Product.findByPk(productID);
    if (!productExists) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    const category = await Category.findByPk(categoryId);
    if (!category) {
      res.status(404).json({ message: "Category not found" });
      return;
    }
    const user = await User.findByPk(ownerId);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const user_id = user.id;
    const cate_id = category.id;

    const updatedProduct = await Product.update(
      {
        id,
        name,
        categoryId: cate_id,
        ownerId: user_id,
        price,
      },
      { where: { id: productID } }
    );

    if (!updatedProduct) {
      res.status(404).json({ message: "Product Not Updated" });
      return;
    }
    res.status(200).send("Products Updated");
  } catch (err) {
    console.error("Error: ", err);
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;
    const product = await Product.destroy({
      where: { id: productID },
    });
    if (!product) {
      res.status(404).json({ message: "Product Not Deleted" });
      return;
    }
    res.status(200).json({ message: "Product Deleted" });
  } catch (err) {
    console.error("Error: ", err);
  }
};

export {
  getAllProducts,
  getCategoryProducts,
  createNewProduct,
  getAProduct,
  deleteProduct,
  updateProduct,
};
