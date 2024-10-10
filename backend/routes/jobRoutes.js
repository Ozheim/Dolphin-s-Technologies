// routes/jobRoutes.js
import express from "express";
import { createJobOffers, getAllJobOffers } from "../controllers/jobController.js";

const router = express.Router();

router.post("/jobs", createJobOffers);
router.get("/jobs", getAllJobOffers);

export default router;
