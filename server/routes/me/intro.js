import express from "express";
import { getIntro } from '../../controllers/me/intro.js';

const router = express.Router();

router.get("/", getIntro);

export default router;