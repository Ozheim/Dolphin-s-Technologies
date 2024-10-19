import express from "express";
import { postJobOnApplyPage } from "../controllers/jobController.js";

const router = express.Router();
router.post("/form", postJobOnApplyPage);

export default router;
