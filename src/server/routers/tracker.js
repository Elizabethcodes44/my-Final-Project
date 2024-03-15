// trackerRouter.js
import express from 'express';
import {getAllTrackers, createTracker} from '../controllers/tracker.js'
const router = express.Router();
router.get('/tracker',getAllTrackers)
router.post('/tracker',createTracker);

export default router;