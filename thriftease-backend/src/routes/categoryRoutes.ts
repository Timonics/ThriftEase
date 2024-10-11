import express from "express";
const router = express.Router();
import {
  getAllCategory,
  getSingleCategory,
  createNewCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController";

router.get("/", getAllCategory);
router.post("/", createNewCategory);

router
  .route("/:userID")
  .get(getSingleCategory)
  .put(updateCategory)
  .delete(deleteCategory);

export default router;
