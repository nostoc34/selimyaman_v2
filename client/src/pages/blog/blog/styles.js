import { createUseStyles } from "react-jss";

const blogStyles = createUseStyles(
	(theme) => ({
		mainContainer: {
			display: "flex",
			gap: "30px",
		},
		column: {
			width: "50%",
			display: "flex",
			flexDirection: "column",
			gap: "30px",
		},
		item: {
			height: "auto",
			cursor: "pointer",
			position: "relative",
            transition: "1s linear all",
			"& > img": {
				width: "100%",
				height: "100%",
			},
            "&:hover": {
                "& > img": {
                    opacity: "0.3"
                },
                "& > div": {
                    transition: "1s linear all",
                    opacity: "1",
                }
            }
		},
        itemInfo: {
            position: "absolute",
            top: "25px",
            left: "25px",
            color: theme.primary,
            opacity: "0",
            transition: "1s linear all",
        },
        '@media (max-width: 850px)': {
            mainContainer: {
                flexDirection: "column",
            },
            column: {
                width: "100%",
            }
        },
        '@media (max-width: 650px)': {
            itemInfo: {
                "& > h1": {
                    fontSize: "1.5em"
                },
                "& > h3": {
                    fontSize: "0.90em",
                }
            }
        },
	}),
	{ name: "Blog" }
);

export default blogStyles;
