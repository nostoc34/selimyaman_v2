"use client"; // Because we're inside a server component
import React, { createContext, useState, useContext } from "react";
// Create the context
const AppContext = createContext();
// Create a provider component
export const AppProvider = ({ children }) => {
	const [theme, setTheme] = useState(true);
	const [lang, setLang] = useState(true);
	// Define any functions or values you want to provide
	const value = {
		theme,
		setTheme,
		lang,
		setLang,
	};
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
// Export the context
export const useAppContext = () => useContext(AppContext);
