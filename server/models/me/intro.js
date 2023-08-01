import mongoose from "mongoose";

const introSchema = mongoose.Schema({
	title: String,
	titleEng: String,
	major: String,
	majorEng: String,
	picture: {
		type: String,
		default: "",
	},
});

const Intro = mongoose.model("Intro", introSchema);
export default Intro;
