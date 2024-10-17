import express from "express";
import { createJobOffers, getAllJobOffers } from "../controllers/jobController.js";
import { auth, adminAuth, headhunterAuth } from "../middleware/auth.js";

const router = express.Router();

router.post("/jobs", headhunterAuth, createJobOffers);
router.get("/jobs", getAllJobOffers);

export default router;
