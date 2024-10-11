import express from "express";
const app = express();

import * as dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const PORT: string | number = process.env.PORT || 3000;
const api = process.env.API_BASE_URL;

import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import categoryRoutes from "./routes/categoryRoutes";

app.use(`${api}users`, userRoutes);
app.use(`${api}products`, productRoutes);
app.use(`${api}categories`, categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
