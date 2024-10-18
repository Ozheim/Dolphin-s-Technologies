import express from 'express';
import { createHunter, loginHunter, getAllHunters, deleteHunter , findHunter} from '../controllers/headhunterController.js';
import { adminAuth } from '../middleware/auth.js';


const router = express.Router();

router.post('/hunters', createHunter);
router.get('/allHunters', adminAuth, getAllHunters);
router.post('/loginHunters', loginHunter);
router.delete('/deletesHunters/:id', adminAuth, deleteHunter);
router.delete('/findHunters/:id', findHunter);

export default router;