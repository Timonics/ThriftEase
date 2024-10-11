import express from "express";
const router = express.Router();
import {
  getAllProducts,
  createNewProduct,
  getAProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/productsController";

router.get("/", getAllProducts);
router.post("/", createNewProduct);

router
  .route("/:productID")
  .get(getAProduct)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;
