import express from "express";
import { getBlog, getAllBlogs, deleteBlog } from '../../controllers/blog/blog.js';

const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlog);
router.delete("/:id", deleteBlog);

export default router;