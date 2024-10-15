import express from "express";
import { createUser, login, getAllUsers } from "../controllers/userController.js";
import User from "../models/user.js";


const router = express.Router();

router.post('/users', createUser);
router.post('/login', login);
router.get('/user', getAllUsers)


export default router;
