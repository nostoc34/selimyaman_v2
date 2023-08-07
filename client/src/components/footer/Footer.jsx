import footerStyles from "./style";
import { useNCoreLocalization, useNCoreTheme } from "ncore-web";

export default function Footer() {
	const cDate = new Date().getFullYear();
	const { activeLocale } = useNCoreLocalization();
	const { colors } = useNCoreTheme();
	const classes = footerStyles();

	return (
		<footer
			style={{
				color: colors.primary,
				backgroundColor: colors.background,
			}}
			className={classes.footer}
		>
			Copyright © {cDate} Selim Yaman.{" "}
			{activeLocale === "tr"
				? "Tüm hakları saklıdır."
				: "All rights reserved."}{" "}
		</footer>
	);
}
