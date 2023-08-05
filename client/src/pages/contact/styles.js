import { createUseStyles } from "react-jss";

const contactStyles = createUseStyles(
	(theme) => ({
		mainContainer: {
			marginRight: "13%",
			marginLeft: "13%",
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
		formInput: {
			background: [theme.inputBg, "!important"],
			width: "100%",
		},
		formButton: {
			border: "none",
			background: [theme.primary, "!important"],
			"& > span": {
				color: [theme.textColor, "!important"],
			},
		},
		socialsItem: {
			"& > svg": {
				color: theme.primary,
			},
		},
	}),
	{ name: "Contact" }
);

export default contactStyles;
