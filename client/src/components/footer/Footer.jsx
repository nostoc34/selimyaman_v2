import { useContext } from "react";
import MainContext from "../../MainContext";
import footerStyles from "./style";

export default function Footer() {
	const cDate = new Date().getFullYear();
	const {lang} = useContext(MainContext);
	const classes = footerStyles();
	return (
		<footer className={classes.footer} >Copyright © {cDate} Selim Yaman. {lang ? "Tüm hakları saklıdır." : "All rights reserved."} </footer>
	);
}
