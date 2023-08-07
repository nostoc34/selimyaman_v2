import { useState } from "react";
import MainContext from "./MainContext";
import { BrowserRouter } from "react-router-dom";
import { NCoreProvider } from "ncore-web";
import globalStyles from "./globalStyles";
import themes from "./themes";
import locales from "./locales";
import PageRoutes from "./PageRoutes";

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
					<PageRoutes />
				</BrowserRouter>
			</MainContext.Provider>
		</NCoreProvider>
	);
}

export default App;
