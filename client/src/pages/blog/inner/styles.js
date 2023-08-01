import { createUseStyles } from "react-jss";

const innerBlogStyles = createUseStyles(
	(theme) => ({
		header: {
			display: "flex",
			justifyContent: "center",
			marginBottom: "40px",
		},
		headerImg: {
			width: "100%",
			height: "auto",
		},
		title: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			color: theme.primary,
			marginBottom: "20px",
			"& > h1": {
				fontSize: "40px",
			},
		},
		content: (props) => ({
			textAlign: "justify",
			color: props.textColor,
			marginBottom: "40px",
			fontSize: "20px",
		}),
		"@media (max-width: 850px)": {
			title: {
				"& > h1": {
					fontSize: "2em",
				},
				"& > h2": {
					fontSize: "1.3em",
				},
			},
			content: (props) => ({
				fontSize: "1em",
			}),
		},
		"@media (max-width: 650px)": {
			title: {
				"& > h1": {
					fontSize: "1.6em",
				},
				"& > h2": {
					fontSize: "1.1em",
				},
			},
		},
	}),
	{ name: "innerBlog" }
);

export default innerBlogStyles;
