import About from "../../models/me/about.js";

//GET
export const getAbout = async (req, res) => {
	try {
		const about = await About.find({});
		res.status(200).json(about);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

//POST
export const postAbout = async (req, res) => {
	try {
		const {
			content1,
			content2,
			content1Eng,
			content2Eng,
			logo1,
            logo2,
		} = req.body;
		const about = new About({
			content1,
			content2,
			content1Eng,
			content2Eng,
			logo1,
            logo2,
		});
		await about.save();
		res.status(200).json(about);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

//PUT
export const updateAbout = async (req, res) => {
	try {
		const about = await About.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(200).json(about);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};
