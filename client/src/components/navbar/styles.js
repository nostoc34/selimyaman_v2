import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
	navbarContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		color: theme.primary,
		margin: {
			top: "3%",
			bottom: "3%",
		},
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
	navbarLogo: {
		width: "80px",
		height: "80px",
		marginRight: "10px",
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
	navbarLink: {
		"& > a": {
			color: theme.primary,
			fontSize: "24px",
			fontWeight: "600",
		},
	},
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
	
	active: {
		borderBottom: "2px solid",
		borderBottomColor: theme.primary,
	},

	'@media (max-width: 850px)': {
		navbarContainer: {
			position: "relative",
		},
		navbarMenu: (props) =>  ({
			display: "flex",
			flexDirection: "column-reverse",
			alignItems: "center",
			gap: "15px",
			position: "absolute",
			top: "50px",
			right: "5%",
			height: "auto",
			maxHeight: props.mHeight,
			overflowY: "hidden",
			transition: "1s ease-in-out all",
		}),
		navbarLinksBox: {
			flexDirection: "column",
			gap: "15px"
		},
		navbarHamburgerMenu:{
			display: "block",
		},
	},

	'@media (max-width: 650px)': {
		navbarLogo: {
			width: "60px",
			height: "60px",
			marginRight: "10px",
		},
		navbarLogoText: {
			fontSize: "24px"
		},
		navbarMenu: (props) => ({
			right: "10%",
		}),
		navbarLink: {
			"& > a": {
				fontSize: "18px",
				fontWeight: "600",
			},
		}
	}
}));

export default useStyles;
