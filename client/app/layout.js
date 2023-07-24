"use client";
import "../styles/globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import MainContext from "./MainContext";
import variables from "../styles/variables.module.scss";
import { useState } from "react";

export const metadata = {
	title: "Selim Yaman",
	description: "Selim Yaman Kişisel Web Sitesi",
};

export default function RootLayout({ children }) {
	const [theme, setTheme] = useState(true);
	const [lang, setLang] = useState(true);
	
	const data = {
		theme,
		setTheme,
		lang,
		setLang,
	};
	return (
		<html lang="en">
			<body
				style={{
					backgroundColor: theme ? variables.dmBg : variables.lmBg,
				}}
			>
				<MainContext.Provider value={data}>
					<Navbar />
					{children}
					<Footer />
				</MainContext.Provider>
			</body>
		</html>
	);
}
