import Social from "../../models/contact/socials.js";

//POST
export const postSocial = async (req, res) => {
	try {
		const { title, logo, link } = req.body;
		const social = new Social({ title, logo, link });
		await social.save();
		res.status(200).json(social);
	} catch(err) {
		res.status(404).json({ message: err.message });
	}
};

//GET
export const getSocials = async (req, res) => {
	try {
		const socials = await Social.find({});
		res.status(200).json(socials);
	} catch(err) {
		res.status(404).json({ message: err.message });
	}
};

//PUT
export const updateSocial = async (req, res) => {
	try {
		const social = await Social.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(200).json(social);
	} catch(err) {
		res.status(404).json({ message: err.message });
	}
};

//DELETE
export const deleteSocial = async (req, res) => {
	try {
		await Social.findByIdAndDelete(req.params.id);
		res.status(200).json({ id: req.params.id });
	} catch(err) {
		res.status(404).json({ message: err.message });
	}
};
