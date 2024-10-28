import { Request, Response, NextFunction } from "express";
import { User } from "../db/models/user";
import { UserAttribute } from "../interfaces/thriftease-interface";

import { compareSync, hashSync } from "bcryptjs";
import { sign } from "jsonwebtoken";

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allUsers = await User.findAll({
      attributes: ["id", "name", "email"],
    });
    if (allUsers.length === 0 || !allUsers) {
      res.status(400).send("No Users Found");
      return;
    }
    res.status(200).json({ success: true, users: allUsers });
  } catch (err) {
    console.error("Error: ", err);
  }
};

const createNewUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, name, email, password } = req.body;

    const newUser: UserAttribute = {
      id,
      name,
      email,
      password,
      passwordHash: hashSync(password, 10),
    };
    const newuser = await User.create(newUser);
    if (!newUser) {
      res.status(400).send("User Not Created");
      return;
    }
    res.status(201).json({
      success: true,
      user: { id: newuser.id, name: newUser.name, email: newuser.email },
    });
  } catch (err) {
    console.error("Err: ", err);
  }
};

const getAUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userID } = req.params;
    const singleUser = await User.findByPk(userID);
    if (!singleUser) {
      res.status(400).send("User Not Found");
      return;
    }
    res.status(201).json({ success: true, user: singleUser });
  } catch (err) {
    console.error("Err: ", err);
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userID } = req.params;
    const deleteUser = await User.destroy({
      where: {
        id: userID,
      },
    });
    if (!deleteUser) {
      res.status(400).send("User Not Found");
      return;
    }
    res.status(200).json({ success: true, message: "User Deleted" });
  } catch (err) {
    console.error("Err: ", err);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userID } = req.params;
    const { name, email, password } = req.body;
    const updateUser = await User.update(
      {
        name,
        email,
        password,
      },
      {
        where: { id: userID },
      }
    );
    if (!updateUser) {
      res.status(400).send("User Not Found");
      return;
    }
    res.status(200).json({ success: true, message: "User Updated" });
  } catch (err) {
    console.error("Err: ", err);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const secret: string = process.env.JWT_SECRET_KEY || "";
    const { email, password } = req.body;
    const userExists = await User.findOne({ where: { email } });
    if (!userExists) {
      res
        .status(404)
        .json({ success: false, message: "This user does not exists" });
      return;
    }
    if (userExists && compareSync(password, userExists.passwordHash)) {
      const token = sign({ id: userExists.id }, secret, {
        algorithm: "HS256",
        expiresIn: "1h",
      });

      res.cookie("authToken", token, {
        httpOnly: true,
        //secure: true,
        maxAge: 1 * 24 * 60 * 60 * 1000,
        sameSite: true,
      });

      res.status(200).json({
        success: true,
        user: {
          token: token,
          id: userExists.id,
          name: userExists.name,
          email: userExists.email,
        },
      });
    } else {
      res
        .status(404)
        .json({ success: false, message: "This password is incorrect" });
    }
  } catch (err) {
    console.error("Failed to generate token", err);
  }
};

const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.clearCookie("authToken", {
      httpOnly: true, // Secure the cookie
      // secure: process.env.NODE_ENV === "production", // Enable secure in production
      sameSite: "strict",
      path: "/", // Ensure this matches the path where the cookie was set
    });
    res.status(200).send({ message: "Logged out successfully" });
  } catch (err) {
    console.error("Failed to clear token", err);
    res.status(500).send({ message: "Logout failed" });
  }
};



export { getAllUsers, createNewUser, getAUser, deleteUser, updateUser, login, logout };
