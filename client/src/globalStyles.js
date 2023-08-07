import { createUseStyles } from "react-jss";

const globalStyles = createUseStyles((theme) => ({
	"@global": {
		"::-webkit-scrollbar-thumb": {
			border: "0px none #ffffff",
			background: "#9f6000",
			borderRadius: 0,
		},
		"::-webkit-scrollbar-thumb:hover": {
			background: "#9f6000",
		},
		"::-webkit-scrollbar-thumb:active": {
			background: "#fafafa",
		},
		"::-webkit-scrollbar-track": {
			border: "0px none #ffffff",
			background: "#3c3c3c",
			borderRadius: 0,
		},
		"::-webkit-scrollbar-track:hover": {
			background: "#464646",
		},
		"::-webkit-scrollbar-track:active": {
			background: "#3c3c3c",
		},
		"::-webkit-scrollbar-corner": {
			background: "transparent",
		},
		"*": {
			transition: "none",
		}
	},
}));

export default globalStyles;
