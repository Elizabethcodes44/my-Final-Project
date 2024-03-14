// trackerRouter.js
import express from 'express';
import {getTracker, createTracker} from '../controllers/tracker.js'
const router = express.Router();
router.get('/tracker',getTracker)
router.post('/tracker',createTracker);

export default router;