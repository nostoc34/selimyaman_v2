"use client"
import { useAppContext } from "../AppContext";

export default function Footer() {
	const cDate = new Date().getFullYear();
	const {lang} = useAppContext();
	return (
		<footer>Copyright © {cDate} Selim Yaman. {lang ? "Tüm hakları saklıdır." : "All rights reserved."} </footer>
	);
}
