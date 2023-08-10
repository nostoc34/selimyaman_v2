import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		type: "login",
		user: "contactselimyaman@gmail.com",
		pass: "gozlablbfdjtogiv",
		// user: process.env.MAIL_USER,
		// pass: process.env.MAIL_PASSWORD,
	},
});

export const sendMail = async (req, res) => {
	const mailOptions = {
		from: process.env.MAIL_USER,
		to: process.env.MAIL_USER,
		subject: `${req.body.name} ${req.body.lastname} (${req.body.email}) kişisinden mesaj!`,
		text: req.body.message,
	};
	try {
		transporter.sendMail(mailOptions);
		res.status(200).json(mailOptions);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};
