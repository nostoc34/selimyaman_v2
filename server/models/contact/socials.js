import mongoose from "mongoose";

const socialSchema = mongoose.Schema({
	title: String,
	logo: {
		type: String,
		default: "",
	},
	link: String,
});

const Social = mongoose.model("Social", socialSchema);
export default Social;