import express from 'express';
import { createHunter, loginHunter } from '../controllers/headhunterController.js';

const router = express.Router();

router.post('/hunters', createHunter);
router.post('/loginHunters', loginHunter);



export default router;
