import express from 'express';
import {getMyInfo} from '../controllers/BaseController.js';

const router = express.Router();

router.route("/").get(getMyInfo);

export default router;