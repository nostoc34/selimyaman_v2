import { useContext } from "react";
import MainContext from "../../MainContext";
import useStyles from "./style";

export default function Footer() {
	const cDate = new Date().getFullYear();
	const {lang} = useContext(MainContext);
	const classes = useStyles();
	return (
		<footer className={classes.footer} >Copyright © {cDate} Selim Yaman. {lang ? "Tüm hakları saklıdır." : "All rights reserved."} </footer>
	);
}
