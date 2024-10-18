import express from "express";
import headhunterDashboard from "../controllers/dashBoardControllers";

const router = express.Router();

router.get("/users/:userId", headhunterDashboard);

export default router;
