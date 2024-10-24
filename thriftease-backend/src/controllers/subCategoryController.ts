import { Request, Response } from "express";
import { SubCategory } from "../db/models/subcategory";
import { SubCategoryAttribute } from "../interfaces/thriftease-interface";
import { Category } from "../db/models/category";

const getAllSubCategory = async (req: Request, res: Response) => {
  try {
    const categories = await SubCategory.findAll({
      include: [
        {
          model: Category,
          as: "category",
        },
      ],
    });
    if (!categories || categories.length === 0) {
      res.status(404).json({ success: false, message: "No Categories Found" });
    }
    res.status(200).json({ success: true, categories: categories });
  } catch (err) {
    console.error("Error: ", err);
  }
};

const getSubCategoryByCategory = async (req: Request, res: Response) => {
  try {
    const { categoryID } = req.params;
    const categoryExists = await Category.findByPk(categoryID);
    if (!categoryExists) {
      res
        .status(400)
        .json({ success: false, message: "This category does not exist" });
      return;
    }
    const subCategories = await SubCategory.findAll({
      include: [
        {
          model: Category,
          as: "category",
        },
      ],
      where: {
        "$category.id$": categoryID
      }
    });
    if (!subCategories || subCategories.length === 0) {
      res
        .status(400)
        .json({ success: false, message: "This category has empty subcategories..." });
      return;
    }
    res.status(200).json({ success: true, subCategories: subCategories });
  } catch (err) {
    console.error("Error: ", err);
  }
};

const getSingleSubCategory = async (req: Request, res: Response) => {
  try {
    const { subCategoryID } = req.params;
    const category = await SubCategory.findByPk(subCategoryID);
    if (!category) {
      res.status(404).json({ success: false, message: "Category Not Found" });
    }
    res.status(200).json({ success: true, categories: category });
  } catch (err) {
    console.error("Error: ", err);
  }
};
const createNewSubCategory = async (req: Request, res: Response) => {
  try {
    const { id, name, categoryId } = req.body;
    const categoryData: SubCategoryAttribute = { id, name, categoryId };
    const newCategories = await SubCategory.create(categoryData);
    if (!newCategories) {
      res
        .status(404)
        .json({ success: false, message: "Categories Not Created" });
    }
    res.status(200).json({ success: true, categories: newCategories });
  } catch (err) {
    console.error("Error: ", err);
  }
};
const updateSubCategory = async (req: Request, res: Response) => {
  try {
    const { subCategoryID } = req.params;
    const { name } = req.body;
    const updatedCategory = await SubCategory.update(
      {
        name,
      },
      { where: { id: subCategoryID } }
    );
    if (!updatedCategory) {
      res
        .status(404)
        .json({ success: false, message: "Categories Not Updated" });
    }
    res.status(200).json({ success: true, message: "Category Updated" });
  } catch (err) {
    console.error("Error: ", err);
  }
};
const deleteSubCategory = async (req: Request, res: Response) => {
  try {
    const { subCategoryID } = req.params;
    const deletedCategory = await SubCategory.destroy({
      where: { id: subCategoryID },
    });

    if (!deletedCategory) {
      res
        .status(404)
        .json({ success: false, message: "Categories Not Deleted" });
    }
    res.status(200).json({ success: true, message: "Category Deleted" });
  } catch (err) {
    console.error("Error: ", err);
  }
};

export {
  getAllSubCategory,
  getSingleSubCategory,
  createNewSubCategory,
  updateSubCategory,
  deleteSubCategory,
  getSubCategoryByCategory,
};
