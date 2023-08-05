import { useState } from "react";
import MainContext from "./MainContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NCoreProvider } from "ncore-web";
import globalStyles from "./globalStyles";
import themes from "./themes";
import locales from "./locales";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/me/Home";
import Blog from "./pages/blog/blog/Blog";
import InnerBlog from "./pages/blog/inner/InnerBlog";
import Contact from "./pages/contact/Contact";

function App() {
	const [theme, setTheme] = useState(true);
	const [lang, setLang] = useState(true);
	const [isCollapsed, setCollapsed] = useState(false);

	const data = {
		theme,
		setTheme,
		lang,
		setLang,
		isCollapsed,
		setCollapsed,
	};
	globalStyles();

	return (
		<NCoreProvider
			config={{
				themes: themes,
				locales,
				initialThemeKey: "dark",
				initialLanguage: "tr",
			}}
		>
			<MainContext.Provider value={data}>
				<BrowserRouter>
					<Navbar mHeight={isCollapsed ? "250px" : "0"} />
					<Routes>
						<Route path="/*" element={<div>404</div>} />
						<Route path="/" element={<Home />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/blog/:id" element={<InnerBlog />} />
						<Route path="/iletisim" element={<Contact />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</MainContext.Provider>
		</NCoreProvider>
	);
}

export default App;
