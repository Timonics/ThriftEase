import express, { Request, Response } from "express";
const app = express();

import * as dotenv from "dotenv"
import morgan from "morgan";

dotenv.config()
app.use(morgan("dev"));

const PORT: string | number = process.env.PORT || 30;

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome" });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
