import logo from "../../assets/logo.png";
import { useContext } from "react";
import MainContext from "../../MainContext";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
import navbarStyles from "./styles";
import { useNCoreLocalization, useNCoreTheme } from "ncore-web";
import { MENU } from "./menu";
import { useState } from "react";

export default function Navbar({ children, ...props }) {
	const { isCollapsed, setCollapsed } = useContext(MainContext);

	const { activeLocale, switchLocale, localize } = useNCoreLocalization();
	const { colors, activeTheme, switchTheme, spaces } = useNCoreTheme();

	const handleCollapseMenu = () => {
		if (isCollapsed) {
			setCollapsed(!isCollapsed);
		} else {
			setCollapsed(true);
		}
	};

	const navigate = useNavigate();
	const classes = navbarStyles(props);

	return (
		<div
			className={classes.navbarContainer}
			style={{ color: colors.primary }}
		>
			<div
				className={classes.navbarLogoBox}
				style={{
					padding: spaces.container,
				}}
				onClick={() => {
					navigate("/");
				}}
			>
				<img className={classes.navbarLogo} src={logo} alt="logo" />
				<h1 className={classes.navbarLogoText}>Selim Yaman</h1>
			</div>
			<div
				id="navbar-menu"
				className={classes.navbarMenu}
				style={{ background: isCollapsed ? colors.textColor : null }}
			>
				<div className={classes.navbarLinksBox}>
					{MENU.map((item, index) => {
						return (
							<div className={classes.navbarLink} key={index}>
								<NavLink
									to={item.path}
									className={({ isActive }) =>
										isActive ? classes.active : ""
									}
									style={{ color: colors.primary }}
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
							<MdOutlineDarkMode />
						</div>
						<div className={classes.navbarToggleMiniBox}>
							{activeTheme === "dark" ? (
								<FaToggleOff
									className={classes.navbarToogleIcon}
									onClick={() => {
										switchTheme(
											activeTheme === "dark"
												? "light"
												: "dark"
										);
										console.log(activeTheme);
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
										console.log(activeTheme);
									}}
								/>
							)}
						</div>
						<div className={classes.navbarToggleMiniBox}>
							<MdOutlineLightMode />
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
