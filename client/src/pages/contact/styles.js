import { createUseStyles } from "react-jss";

const contactStyles = createUseStyles(
	{
		mainContainer: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
		},
		backgroundImg: {
			width: "100%",
			maxWidth: "500px",
			alignSelf: "center"
		},
		formContainer: {
			padding: "3% 13% 0 13%",
			display: "flex",
			flexDirection: "column",
			gap: "50px",
			"@media screen and (max-width: 850px)": {
				gap: "30px",
				padding: "7% 13% 0 13%",
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
		formInput: (props) => ({
			backgroundColor: [props.inputBg, "!important"],
			width: "100%",
			padding: "10px",
			border: `1px solid ${props.borderClr}`,
			color: props.textClr,
			fontSize: "16px",
		}),
		formButton: (props) => ({
			border: `1px solid ${props.btnBorderClr}`,
			background: [props.btnBg, "!important"],
			width: "100%",
			padding: "10px",
			color: [props.btnTxtColor, "!important"],
			fontFamily: ["Teko", "!important"],
			fontSize: ["18px", "!important"],
			cursor: "pointer",
			"&:hover": {
				background: "white !important",
				color: [props.hoverBtnTxtClr, "!important"]
			}
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
