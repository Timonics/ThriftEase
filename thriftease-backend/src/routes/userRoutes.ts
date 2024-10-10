import express, { Router } from "express";
const router: Router = express.Router();

import {
  getAllUsers,
  createNewUser,
  getAUser,
  deleteUser,
  updateUser,
  login,
} from "../controllers/userControllers";

router.get("/", getAllUsers);
router.post("/register", createNewUser);
router.post("/login", login);

router.route("/:userID").get(getAUser).delete(deleteUser).put(updateUser);

export default router;
