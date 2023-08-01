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
			major,
			titleEng,
			majorEng,
			picture,
		} = req.body;
		const intro = new Intro({
			title,
			major,
			titleEng,
			majorEng,
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
