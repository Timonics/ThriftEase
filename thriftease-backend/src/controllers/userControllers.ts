import { Request, Response, NextFunction } from "express";
import { User } from "../db/models/user";

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allUsers = await User.findAll();
    if (allUsers.length === 0) {
      res.status(400).send("No Users Found");
      return;
    }
    res.status(200).json({ success: true, users: allUsers });
  } catch (err) {
    console.error("Error: ", err);
  }
};

export { getAllUsers };
