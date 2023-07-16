import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";

//import routes
import introRoutes from "./routes/me/intro.js";
import aboutRoutes from "./routes/me/about.js";
import blogRoutes from "./routes/blog/blog.js";
import socialRoutes from "./routes/contact/socials.js";

//import controllers for routes with files
import { postIntro, updateIntro } from "./controllers/me/intro.js";
import { postAbout, updateAbout } from "./controllers/me/about.js";
import { postBlog, updateBlog } from "./controllers/blog/blog.js";
import { postSocial, updateSocial } from "./controllers/contact/socials.js";

//initial settings
dotenv.config();
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

//file storage
// const storage = multer.diskStorage({
// 	destination: function (req, file, cb) {
// 		let type = req.params.type;
// 		let path = "server/public/assets/${type}";
// 		cb(null, path);
// 	},
// 	filename: function (req, file, cb) {
// 		cb(null, file.originalname);
// 	},
// });
// const upload = multer({ storage: storage });

//routes
app.use("/api/intro", introRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/social", socialRoutes);

//routes with files
app.post("/api/intro", postIntro);
app.put("/api/intro/:id", updateIntro);
app.post("/api/about", postAbout);
app.put("/api/about/:id", updateAbout);
app.post("/api/blog", postBlog);
app.put("/api/blog/:id", updateBlog);
app.post("/api/social", postSocial);
app.put("/api/social/:id", updateSocial);

//connect to db
const PORT = process.env.PORT || 5000;
mongoose
	.connect(process.env.CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(PORT, () => {
			console.log("Server is running on port " + PORT);
		});
	})
	.catch((error) => {
		console.log(error.message);
	});
