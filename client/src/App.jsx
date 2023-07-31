import { useState } from "react";
import MainContext from "./MainContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "react-jss";
import myTheme from "./theme";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/me/Home";
import Blog from "./pages/blog/blog/Blog";

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
	const bodyElement = document.body;
	bodyElement.style.background = theme ? myTheme.dmBg : myTheme.lmBg;
	return (
		<ThemeProvider theme={myTheme}>
			<MainContext.Provider value={data}>
				<BrowserRouter>
					<Navbar mHeight={isCollapsed ? "250px" : "0"} collapseBg={theme ? myTheme.lmText : myTheme.dmText} />
					<Routes>
						<Route path="/*" element={<div>404</div>} />
						<Route path="/" element={<Home textColor={theme ? myTheme.dmText : myTheme.lmText} />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/blog/:id" element={<div>Inner Blog</div>} />
						<Route path="/iletisim" element={<div>Contact</div>} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</MainContext.Provider>
		</ThemeProvider>
	);
}

export default App;
