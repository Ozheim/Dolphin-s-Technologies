import express from "express";
import {
  createHunter,
  loginHunter,
  getAllHunters,
  deleteHunter,
  getOffers,
  deleteOffer,
} from "../controllers/headhunterController.js";
import { adminAuth, headhunterAuth } from "../middleware/auth.js";

const router = express.Router();

router.post("/hunters", createHunter);
router.get("/allHunters", adminAuth, getAllHunters);
router.get("/getOffers", headhunterAuth, getOffers);
router.post("/loginHunters", loginHunter);
router.delete("/deletesHunters/:id", adminAuth, deleteHunter);
router.delete("/deleteOffer/:id", headhunterAuth, deleteOffer);


export default router;
