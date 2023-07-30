import { useState } from "react";
import MainContext from "./MainContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "react-jss";
import myTheme from "./theme";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

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
	return (
		<ThemeProvider theme={myTheme}>
			<MainContext.Provider value={data}>
				<BrowserRouter>
					<Navbar mHeight={isCollapsed ? "250px" : "0"} />
					<Routes>
						{/* <Route path="/*" element={<NotFound />} /> */}
						<Route path="/" element={<div>Home</div>} />
						<Route path="/blog" element={<div>Blog</div>} />
						<Route path="/iletisim" element={<div>Contact</div>} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</MainContext.Provider>
		</ThemeProvider>
	);
}

export default App;
