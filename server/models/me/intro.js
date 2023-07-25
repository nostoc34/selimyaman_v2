import mongoose from "mongoose";

const introSchema = mongoose.Schema({
    title: String,
    titleEng: String,
    profession1: String,
    profession2: String,
    profession3: String,
    profession4: String,
    major1: String,
    major2: String,
    major3: String,
    major4: String,
    titleEng: String,
    profession1Eng: String,
    profession2Eng: String,
    profession3Eng: String,
    profession4Eng: String,
    major1Eng: String,
    major2Eng: String,
    major3Eng: String,
    major4Eng: String,
    picture: {
		type: String,
		default: "",
	},
})

const Intro = mongoose.model("Intro", introSchema);
export default Intro;