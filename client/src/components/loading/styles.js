import { createUseStyles } from "react-jss";

const loadingStyles = createUseStyles((theme) => ({
	"@keyframes turnAround": {
		from: { transform: "rotateY(0deg)" },
		to: { transform: "rotateY(360deg)" },
	},
	loading: {
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		animationName: "$turnAround",
		animationDuration: "2s",
		animationIterationCount: "infinite",
		"& > img": {
			width: "300px",
			height: "300px",
		},
	},
}));

export default loadingStyles;
