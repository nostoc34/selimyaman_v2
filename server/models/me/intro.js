import mongoose from "mongoose";

const introSchema = mongoose.Schema({
    title: String,
    profession1: String,
    profession2: String,
    profession3: String,
    profession4: String,
    major1: String,
    major2: String,
    major3: String,
    major4: String,
    picture: {
		type: String,
		default: "",
	},
})

const Intro = mongoose.model("Intro", introSchema);
export default Intro;