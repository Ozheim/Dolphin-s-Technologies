import express from "express";
import { userDashboard } from "../controllers/dashBoardControllers.js";

const router = express.Router();

router.get("/users/:userId", userDashboard);

export default router;
