import { createUseStyles } from "react-jss";

const contactStyles = createUseStyles(
	{
		mainContainer: {
			padding: "5% 13%",
			display: "flex",
			flexDirection: "column",
			gap: "60px",
			"@media screen and (max-width: 850px)": {
				gap: "30px",
				padding: "10% 13%",
			},
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
		formNames: {
			display: "flex",
			gap: "30px",
			width: "100%",
			"@media screen and (max-width: 850px)": {
				flexDirection: "column",
			},
		},
		formInput: (props) => ({
			backgroundColor: [props.inputBg, "!important"],
			width: "100%",
			"& textarea": {
				minHeight: "150px",
			},
		}),
		formButton: (props) => ({
			border: "none",
			background: [props.btnBg, "!important"],
			"& > span": {
				color: [props.btnTxtColor, "!important"],
				fontFamily: ["Teko", "!important"],
				fontSize: ["18px", "!important"]
			},
		}),
		socialsContainer: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			gap: "20px",
		},
		socialsItem: (props) => ({
			color: props.svgClr,
			"&:hover": {
				color: props.svgHoverClr,
			},
			"&>div": {
				"&>svg": {
					height: "50px",
					width: "50px",
					"@media screen and (max-width: 850px)": {
						height: "30px",
						width: "30px",
					},
				},
			},
		}),
	},
	{ name: "Contact" }
);

export default contactStyles;
