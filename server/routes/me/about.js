import express from "express";
import { getAbout } from '../../controllers/me/about.js';

const router = express.Router();

router.get("/", getAbout);

export default router;