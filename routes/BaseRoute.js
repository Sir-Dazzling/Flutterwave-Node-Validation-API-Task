import express from 'express';
import {getMyInfo} from '../controllers/BaseController.js';
import {notFound} from '../middleware/ErrorMiddleware.js';

const router = express.Router();

router.route("/").get(getMyInfo);

export default router;