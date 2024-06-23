import express from 'express';
import { login,register,logout, allUsers } from '../component/userAuthComponents.js';


const router = express.Router();
router.get("/",allUsers)
router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

export default router;
