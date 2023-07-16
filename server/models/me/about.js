import mongoose from "mongoose";

const aboutSchema = mongoose.Schema({
	content1: String,
	content2: String,
	logo1: {
		type: String,
		default: "",
	},
	logo2: {
		type: String,
		default: "",
	},
});

const About = mongoose.model("About", aboutSchema);
export default About;
