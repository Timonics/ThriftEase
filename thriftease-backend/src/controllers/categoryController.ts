import { Request, Response } from "express";
import { Category } from "../db/models/category";
import { CategoryAttribute } from "../interfaces/thriftease-interface";

const getAllCategory = async (req: Request, res: Response) => {
  try {
    const categories = await Category.findAll();
    if (!categories || categories.length === 0) {
      res.status(404).json({ success: false, message: "No Categories Found" });
    }
    res.status(200).json({ success: true, categories: categories });
  } catch (err) {
    console.error("Error: ", err);
  }
};
const getSingleCategory = async (req: Request, res: Response) => {
  try {
    const { categoryID } = req.params;
    const category = await Category.findByPk(categoryID);
    if (!category) {
      res.status(404).json({ success: false, message: "Categories Not Found" });
    }
    res.status(200).json({ success: true, categories: category });
  } catch (err) {
    console.error("Error: ", err);
  }
};
const createNewCategory = async (req: Request, res: Response) => {
  try {
    const { id, name } = req.body;
    const categoryData: CategoryAttribute = { id, name };

    const categoryNameExists = await Category.findOne({
      where: {
        name: categoryData.name,
      },
    });

    if (categoryNameExists) {
      res
        .status(400)
        .json({ success: false, message: "Category Name Already Exists" });
      return;
    }

    const newCategories = await Category.create(categoryData);
    if (!newCategories) {
      res
        .status(404)
        .json({ success: false, message: "Categories Not Created" });
      return;
    }
    res.status(200).json({ success: true, categories: newCategories });
  } catch (err) {
    console.error("Error: ", err);
  }
};
const updateCategory = async (req: Request, res: Response) => {
  try {
    const { categoryID } = req.params;
    const { name } = req.body;
    const updatedCategory = await Category.update(
      {
        name,
      },
      { where: { id: categoryID } }
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
const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { categoryID } = req.params;
    const deletedCategory = await Category.destroy({
      where: { id: categoryID },
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
  getAllCategory,
  getSingleCategory,
  createNewCategory,
  updateCategory,
  deleteCategory,
};
