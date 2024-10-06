import { Request, Response } from "express";

const notFound = (req: Request, res: Response, next: any) => {
  res.status(404).json({
    success: false,
    message: "Not Found",
  });

};

export default notFound;