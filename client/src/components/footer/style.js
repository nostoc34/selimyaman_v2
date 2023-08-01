import { createUseStyles } from "react-jss";

const footerStyles = createUseStyles((theme) => ({
	footer: {
		color: theme.primary,
		textAlign: "center",
		paddingBottom: "10px",
	},
}));

export default footerStyles;
