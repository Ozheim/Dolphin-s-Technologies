
import express from "express";
import { createJobOffers, getAllJobOffers } from "../controllers/jobController.js";

const router = express.Router();

router.post("/jobs", createJobOffers);
router.get("/jobss", getAllJobOffers);




export default router;
