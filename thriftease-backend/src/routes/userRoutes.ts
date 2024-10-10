import express, { Router } from "express";
const router: Router = express.Router();

import { getAllUsers } from "../controllers/userControllers";

router.get("/", getAllUsers);

export default router;
