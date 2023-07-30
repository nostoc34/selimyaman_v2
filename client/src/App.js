import { useState } from "react";
import MainContext from "./MainContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "react-jss";
import myTheme from "./theme";

import Navbar from "./components/navbar/navbar";

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
		setCollapsed
	};
	return (
		<ThemeProvider theme={myTheme}>
			<MainContext.Provider value={data}>
				<BrowserRouter>
					<Routes>
						{/* <Route path="/*" element={<NotFound />} /> */}
						<Route path="/" element={<Navbar mHeight= {isCollapsed ? "250px" : "0"}  />} />
					</Routes>
				</BrowserRouter>
			</MainContext.Provider>
		</ThemeProvider>
	);
}

export default App;
