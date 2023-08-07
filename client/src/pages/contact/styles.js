import { createUseStyles } from "react-jss";

const contactStyles = createUseStyles(
	(theme) => ({
		mainContainer: {
			padding: "30px 13% 0 13%",
			display: "flex",
			flexDirection: "column",
			gap: "60px",
		},
		form: {
			display: "flex",
			flexDirection: "column",
			gap: "30px",
			margin: {
				left: "15%",
				right: "15%",
			},
			justifyContent: "center",
			alignItems: "center",
		},
		formInput: (props) => ({
			backgroundColor: [props.inputBg, "!important"],
			width: "100%",
		}),
		formButton: (props) => ({
			border: "none",
			background: [props.btnBg, "!important"],
			"& > span": {
				color: [props.btnTxtColor, "!important"],
			},
		}),
		socialsContainer: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			gap: "20px",
		},
		socialsItem: {
			"&>div": {
				"&>svg": {
					height: "50px",
					width: "50px",
				},
			},
		},
	}),
	{ name: "Contact" }
);

export default contactStyles;
