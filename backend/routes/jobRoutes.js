import express from "express";
import { auth, adminAuth, headhunterAuth } from "../middleware/auth.js";
import {
  createJobOffers,
  getAllJobOffers,
  getJobById,
} from "../controllers/jobController.js";

const router = express.Router();

router.post("/jobs", headhunterAuth, createJobOffers);
router.get("/jobs", getAllJobOffers);

router.get("/jobs/:id", getJobById);
export default router;
