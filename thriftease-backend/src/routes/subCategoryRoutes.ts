import express from "express";
const router = express.Router();
import {
  getAllSubCategory,
  getSingleSubCategory,
  createNewSubCategory,
  updateSubCategory,
  deleteSubCategory,
  getSubCategoryByCategory
} from "../controllers/subCategoryController";

router.get("/", getAllSubCategory);
router.post("/", createNewSubCategory);

router
  .route("/:subCategoryID")
  .get(getSingleSubCategory)
  .put(updateSubCategory)
  .delete(deleteSubCategory);

router.get("/category/:categoryID", getSubCategoryByCategory)

export default router;
