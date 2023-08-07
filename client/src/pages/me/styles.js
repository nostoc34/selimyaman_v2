import { createUseStyles } from "react-jss";

const homeStyles = createUseStyles(
	{
		homepageContainer: {
			paddingRight: "13%",
			paddingLeft: "13%",
		},
		introContainer: {
			display: "flex",
			gap: "30px",
		},
		introLeft: {
			width: "50%",
		},
		introRight: (props) => ({
			width: "50%",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			gap: "25px",
			borderBottomLeftRadius: "50px",
			borderBottomRightRadius: "50px",
			"& > h1": {
				fontSize: "48px",
				fontWeight: "400",
			},
			"& > p": {
				fontSize: "24px",
				textAlign: "center",
			},
		}),
		introPicture: {
			width: "100%",
			height: "100%",
			borderTopLeftRadius: "50px",
			borderTopRightRadius: "50px",
		},
		aboutContainer: (props) => ({
			borderRadius: "50px",
			marginTop: "30px",
			padding: "3% 10%",
			display: "flex",
			justifyContent: "center",
			textAlign: "center",
			gap: "50px",
			fontSize: "20px",
			fontWeight: "400",
		}),
		aboutContents: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			padding: "0 15% 0 0",
			gap: "20px",
		},
		who: (props) => ({
			fontSize: "24px",
			fontWeight: "700",
			padding: "5px",
			cursor: "pointer",
			border: `1px solid ${props.borderClr}`,
			borderRadius: "15px",
			"&:hover": {
				backgroundColor: [props.hoverBg, "!important"],
				color: [props.hoverClr, "!important"],
				borderColor: [props.hoverBorderClr, "!important"],
			},
		}),
		aboutLogo: {
			width: "100%",
			maxWidth: "50px",
			maxHeight: "50px",
			margin: {
				right: "5px",
				left: "5px",
				top: "15px",
			},
		},
		"@media (max-width: 1100px)": {
			introRight: (props) => ({
				"& > h1": {
					fontSize: "36px",
				},
				"& > p": {
					fontSize: "18px",
				},
			}),
			aboutContainer: (props) => ({
				fontSize: "16px",
			}),
		},
		"@media (max-width: 850px)": {
			introContainer: {
				flexDirection: "column",
			},
			introLeft: {
				width: "100%",
			},
			introRight: (props) => ({
				width: "100%",
				padding: {
					top: "20%",
					bottom: "20%",
				},
			}),
			aboutContainer: (props) => ({
				padding: "10%",
				marginTop: "20px",
			}),
		},
	},
	{ name: "Homepage" }
);

export default homeStyles;
