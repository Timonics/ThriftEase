import express from "express";
const router = express.Router();
import {
  getAllSubCategory,
  getSingleSubCategory,
  createNewSubCategory,
  updateSubCategory,
  deleteSubCategory,
} from "../controllers/subCategoryController";

router.get("/", getAllSubCategory);
router.post("/", createNewSubCategory);

router
  .route("/:subCategoryID")
  .get(getSingleSubCategory)
  .put(updateSubCategory)
  .delete(deleteSubCategory);

export default router;
