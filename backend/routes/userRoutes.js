import express from "express";
import {
  createUser,
  login,
  getAllUsers,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/createUsers", createUser);
router.post("/login", login);
router.get("/allUser", getAllUsers);

export default router;
