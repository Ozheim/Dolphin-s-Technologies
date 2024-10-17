
import express from "express";
import {
  createJobOffers,
  getAllJobOffers,
  getJobById,
} from "../controllers/jobController.js";

const router = express.Router();

router.post("/jobs", createJobOffers);
router.get("/jobs", getAllJobOffers);

router.get("/jobs/:id", getJobById);
export default router;
