import express from 'express';
import { signUp, logIn } from '../controllers/user.js';

const router = express.Router();

router.post('/signUp', signUp);
router.post('/login', logIn);

export default router;