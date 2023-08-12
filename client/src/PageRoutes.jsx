import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/me/Home";
import Blog from "./pages/blog/blog/Blog";
import InnerBlog from "./pages/blog/inner/InnerBlog";
import Contact from "./pages/contact/Contact";

import MainContext from "./MainContext";
import { useContext } from "react";
import { useNCoreTheme } from "ncore-web";

function PageRoutes() {
	const { isCollapsed } = useContext(MainContext);
	const { colors } = useNCoreTheme();
	return (
		<>
			<Navbar
				mHeight={isCollapsed ? "250px" : "0"}
				clpsBg={colors.primary}
				clpsColor={colors.textColor}
				linkColor={colors.primary}
				hoverLinkColor={colors.antiBackground}
			/>
			<Routes>
				<Route path="/*" element={<div>404</div>} />
				<Route
					path="/"
					element={
						<Home
							hoverBg={colors.primary}
							hoverClr={colors.textColor}
							borderClr={colors.primary}
							hoverBorderClr={colors.textColor}
						/>
					}
				/>
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog/:id" element={<InnerBlog />} />
				<Route
					path="/iletisim"
					element={
						<Contact
							inputBg={colors.inputBg}
							btnBg={colors.primary}
							btnBorderClr={colors.primary}
							btnTxtColor={colors.textColor}
							hoverBtnTxtClr={colors.primary}
							svgClr={colors.primary}
							svgHoverClr={colors.antiBackground}
							borderClr={colors.primary}
							textClr={colors.antiBackground}
						/>
					}
				/>
			</Routes>
			<Footer />
		</>
	);
}

export default PageRoutes;
