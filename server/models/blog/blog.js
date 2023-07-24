import mongoose from "mongoose";
import lod from "lodash";

function duplicate() {
	return "/blog/" + lod.kebabCase(this.title);
}

const blogSchema = mongoose.Schema(
	{
		title: String,
		content: String,
		titleEng: String,
		contentEng: String,
		link: {
			type: String,
			default: duplicate,
		},
		mainPicture: {
			type: String,
			default: "",
		},
		contentPicture1: {
			type: String,
			default: "",
		},
		contentPicture2: {
			type: String,
			default: "",
		},
	},
	{ timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
