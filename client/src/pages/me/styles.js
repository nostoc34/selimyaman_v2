import { createUseStyles } from "react-jss";

const homeStyles = createUseStyles(
	(theme) => ({
		introContainer: {
			display: "flex",
			gap: "50px",
		},
		introLeft: {
			width: "50%",
		},
		introRight: (props) => ({
			width: "50%",
			backgroundColor: theme.primary,
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			color: props.textColor,
			borderBottomLeftRadius: "50px",
			borderBottomRightRadius: "50px",
			"& > h1": {
				fontSize: "48px",
				fontWeight: "400",
			},
			"& > p": {
				fontSize: "24px",
			},
		}),
		introPicture: {
			width: "100%",
			height: "100%",
			borderTopLeftRadius: "50px",
			borderTopRightRadius: "50px",
		},
		aboutContainer: (props) => ({
			background: theme.primary,
			color: props.textColor,
			borderRadius: "50px",
			marginTop: "50px",
			marginBottom: "50px",
			padding: "5%",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			textAlign: "center",
			gap: "20px",
			fontSize: "20px",
			fontWeight: "400",
		}),
		aboutLogo: {
			width: "100%",
			maxWidth: "50px",
			maxHeight: "50px",
			margin: {
				right: "5px",
				left: "5px",
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
				gap: "20px",
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
				marginBottom: "20px",
			}),
		},
	}),
	{ name: "Homepage" }
);

export default homeStyles;
