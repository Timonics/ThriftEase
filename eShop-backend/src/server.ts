import express, { Request, Response } from "express";
const app = express();

import morgan from "morgan";
import notFound from "./errorHandler/notFound";

require("dotenv").config();
app.use(morgan("combined"));

const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("This is my Typescript Node Js backend");
});

app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
