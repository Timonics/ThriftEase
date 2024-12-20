import express from "express";
const app = express();

import * as dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import authJwt from "./authorization/jwt";

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//app.use(authJwt())


const PORT: string | number = process.env.PORT || 4000;
const api = process.env.API_BASE_URL;

import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import subCategoryRoutes from "./routes/subCategoryRoutes";

app.use(`${api}users`, userRoutes);
app.use(`${api}products`, productRoutes);
app.use(`${api}categories`, categoryRoutes);
app.use(`${api}sub-categories`, subCategoryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
