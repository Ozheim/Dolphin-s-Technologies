import express from "express";
import userDashboard from "../controllers/dashBoardControllers";

const router = express.Router();

router.get("/users/:userId", userDashboard);
router.get("/headhunters/:hunterId", hunterDashboard);


export default router;
