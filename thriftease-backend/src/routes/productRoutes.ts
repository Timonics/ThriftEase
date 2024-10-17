import express from "express";
const router = express.Router();
import {
  getAllProducts,
  getCategoryProducts,
  createNewProduct,
  getAProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/productsController";

router.get("/", getAllProducts);
router.get("/categories/:categoryName", getCategoryProducts)
router.post("/", createNewProduct);

router
  .route("/:productID")
  .get(getAProduct)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;
