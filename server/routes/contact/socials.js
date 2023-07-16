import express from "express";
import { getSocials, deleteSocial } from "../../controllers/contact/socials.js";

const router = express.Router();

router.get("/", getSocials);
router.delete("/:id", deleteSocial);

export default router;