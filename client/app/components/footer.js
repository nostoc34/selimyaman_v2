"use client"
import { useContext } from "react";
import MainContext from "../MainContext";
import "../../styles/footer/footer.scss";

export default function Footer() {
	const cDate = new Date().getFullYear();
	const {lang} = useContext(MainContext);
	return (
		<footer>Copyright © {cDate} Selim Yaman. {lang ? "Tüm hakları saklıdır." : "All rights reserved."} </footer>
	);
}
