import logo from "../../assets/logo.png";
import { useContext, useState, useEffect } from "react";
import MainContext from "../../MainContext";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
import navbarStyles from "./styles";
import { useNCoreLocalization, useNCoreTheme } from "ncore-web";
import { MENU } from "./menu";

export default function Navbar({ children, ...props }) {
	const { isCollapsed, setCollapsed } = useContext(MainContext);

	const { activeLocale, switchLocale, localize } = useNCoreLocalization();
	const { colors, activeTheme, switchTheme } = useNCoreTheme();

	const handleCollapseMenu = () => {
		if (isCollapsed) {
			setCollapsed(!isCollapsed);
		} else {
			setCollapsed(true);
		}
	};

	const navigate = useNavigate();
	const classes = navbarStyles(props);

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
		if (windowWidth >= 850) {
			setCollapsed(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div
			className={classes.navbarContainer}
			style={{
				color: colors.primary,
				backgroundColor: colors.background,
			}}
		>
			<div
				className={classes.navbarLogoBox}
				onClick={() => {
					navigate("/");
				}}
			>
				<img className={classes.navbarLogo} src={logo} alt="logo" />
				<h1 className={classes.navbarLogoText}>Selim Yaman</h1>
			</div>
			<div id="navbar-menu" className={classes.navbarMenu}>
				<div className={classes.navbarLinksBox}>
					{MENU.map((item, index) => {
						return (
							<div className={classes.navbarLink} key={index}>
								<NavLink
									to={item.path}
									className={({ isActive }) =>
										isActive ? classes.active : ""
									}
								>
									{localize(item.key)}
								</NavLink>
							</div>
						);
					})}
				</div>
				<div>
					<div className={classes.navbarToggles}>
						<div className={classes.navbarToggleMiniBox}>
							<p>TR</p>
						</div>
						<div className={classes.navbarToggleMiniBox}>
							{activeLocale === "tr" ? (
								<FaToggleOff
									className={classes.navbarToogleIcon}
									onClick={() => {
										switchLocale(
											activeLocale === "tr" ? "en" : "tr"
										);
									}}
								/>
							) : (
								<FaToggleOn
									className={classes.navbarToogleIcon}
									onClick={() => {
										switchLocale(
											activeLocale === "tr" ? "en" : "tr"
										);
									}}
								/>
							)}
						</div>
						<div className={classes.navbarToggleMiniBox}>
							<p>ENG</p>
						</div>
					</div>
					<div className={classes.navbarToggles}>
						<div className={classes.navbarToggleMiniBox}>
							<MdOutlineLightMode />
						</div>
						<div className={classes.navbarToggleMiniBox}>
							{activeTheme === "light" ? (
								<FaToggleOff
									className={classes.navbarToogleIcon}
									onClick={() => {
										switchTheme(
											activeTheme === "dark"
												? "light"
												: "dark"
										);
									}}
								/>
							) : (
								<FaToggleOn
									className={classes.navbarToogleIcon}
									onClick={() => {
										switchTheme(
											activeTheme === "dark"
												? "light"
												: "dark"
										);
									}}
								/>
							)}
						</div>
						<div className={classes.navbarToggleMiniBox}>
							<MdOutlineDarkMode />
						</div>
					</div>
				</div>
			</div>
			<GiHamburgerMenu
				onClick={handleCollapseMenu}
				className={classes.navbarHamburgerMenu}
			/>
		</div>
	);
}
