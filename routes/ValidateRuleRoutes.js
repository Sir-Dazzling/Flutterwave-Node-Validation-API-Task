import express from 'express';
import { validateData } from '../controllers/ValidateRuleController.js';
import {notFound} from '../middleware/ErrorMiddleware.js';

const router = express.Router();

router.route("/").post(validateData);

export default router;