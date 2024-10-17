import express from "express";
import { createUser, login, getAllUsers, deleteUser } from "../controllers/userController.js";
import { adminAuth } from "../middleware/auth.js";

const router = express.Router();

router.post('/createUsers', createUser);
router.post('/login', login);
router.get('/allUser', adminAuth, getAllUsers);
router.delete('/deleteUser/:id', adminAuth, deleteUser);

export default router;
