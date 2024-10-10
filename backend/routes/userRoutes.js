import express from 'express';
import { createUser, login } from '../controllers/userController.js';

const router = express.Router();

router.post('/users', createUser);
router.post('/login', login);

router.get('/protected-route', (req, res) => {
    res.json({ message: 'Cette route est protégée et vous êtes authentifié.' });
});

export default router;
