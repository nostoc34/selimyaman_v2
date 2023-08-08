import { createUseStyles } from "react-jss";

const navbarStyles = createUseStyles({
	navbarContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: {
			top: "20px",
			bottom: "20px",
			right: "3%",
			left: "3%",
		},
		zIndex: 654654,
		position: "relative",
	},
	navbarMenu: (props) => ({
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "30px",
	}),
	navbarLogoBox: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		cursor: "pointer",
	},
	"@keyframes turnAround": {
		"90%": { transform: "rotateY(0deg)" },
		"100%": { transform: "rotateY(360deg)" },
	},
	navbarLogo: {
		width: "80px",
		height: "80px",
		marginRight: "10px",
		animationName: "$turnAround",
		animationDuration: "30s",
		animationIterationCount: "infinite",
	},
	navbarLogoText: {
		fontSize: "36px",
	},
	navbarLinksBox: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "30px",
		padding: "3px",
	},
	navbarLink: (props) => ({
		"& > a": {
			fontSize: "24px",
			fontWeight: "600",
			color: props.linkColor,
			"&:hover": {
				color: props.hoverLinkColor,
			},
		},
	}),
	navbarToggles: {
		display: "flex",
		alignItems: "center",
		fontSize: "20px",
		fontWeight: "400",
		lineHeight: "1",
		gap: "5px",
	},
	navbarToggleMiniBox: {
		width: "25px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		"& > svg": {
			height: "20px",
			width: "20px",
		},
	},
	navbarToogleIcon: {
		cursor: "pointer",
	},
	navbarHamburgerMenu: {
		height: "30px",
		width: "30px",
		cursor: "pointer",
		display: "none",
	},

	active: (props) => ({
		borderBottom: "2px solid",
	}),

	"@media (max-width: 850px)": {
		navbarContainer: {
			position: "relative",
		},
		navbarMenu: (props) => ({
			display: "flex",
			flexDirection: "column-reverse",
			alignItems: "center",
			gap: "15px",
			position: "absolute",
			top: "60%",
			right: "55px",
			height: "auto",
			maxHeight: props.mHeight,
			overflowY: "hidden",
			transition: "1s ease-in-out all",
			borderRadius: "5px",
			backgroundColor: props.clpsBg,
			color: props.clpsColor
		}),
		navbarLinksBox: {
			flexDirection: "column",
			gap: "15px",
		},
		navbarLink: (props) => ({
			"&  a": {
				color: ["white", "!important"],
				cursor: "pointer",
			},
		}),
		navbarHamburgerMenu: {
			display: "block",
		},
	},

	"@media (max-width: 650px)": {
		navbarLogo: {
			width: "60px",
			height: "60px",
			marginRight: "10px",
		},
		navbarLogoText: {
			fontSize: "24px",
		},
		navbarMenu: (props) => ({
			right: "45px",
		}),
		navbarLink: {
			"& > a": {
				fontSize: "18px",
				fontWeight: "600",
			},
		},
	},
});

export default navbarStyles;
