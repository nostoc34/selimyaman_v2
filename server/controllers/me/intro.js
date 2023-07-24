import Intro from "../../models/me/intro.js";

//GET
export const getIntro = async (req, res) => {
	try {
		const intro = await Intro.find({});
		res.status(200).json(intro);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

//POST
export const postIntro = async (req, res) => {
	try {
		const {
			title,
			profession1,
			profession2,
			profession3,
			profession4,
			major1,
			major2,
			major3,
			major4,
			titleEng,
			profession1Eng,
			profession2Eng,
			profession3Eng,
			profession4Eng,
			major1Eng,
			major2Eng,
			major3Eng,
			major4Eng,
			picture,
		} = req.body;
		const intro = new Intro({
			title,
			profession1,
			profession2,
			profession3,
			profession4,
			major1,
			major2,
			major3,
			major4,
			titleEng,
			profession1Eng,
			profession2Eng,
			profession3Eng,
			profession4Eng,
			major1Eng,
			major2Eng,
			major3Eng,
			major4Eng,
			picture,
		});
		await intro.save();
		res.status(200).json(intro);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

//PUT
export const updateIntro = async (req, res) => {
	try {
		const intro = await Intro.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(200).json(intro);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};
