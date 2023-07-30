import logo from "../../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import MainContext from "../../MainContext";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
import useStyles from "./styles";

export default function Navbar({ children, ...props }) {
	const { lang, setLang, theme, setTheme, isCollapsed, setCollapsed } = useContext(MainContext);
	
	const handleCollapseMenu = () => {
		if (isCollapsed) {
			setCollapsed(!isCollapsed);
		} else {
			setCollapsed(true);
		}
		console.log(isCollapsed);
	};
	const links = [
		{ href: "/", content: lang ? "Ben" : "Me" },
		{ href: "/blog", content: "Blog" },
		{ href: "/iletisim", content: lang ? "İletişim" : "Contact" },
	];

	const navigate = useNavigate();
	const classes = useStyles(props);

	return (
		<div className={classes.navbarContainer}>
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
					{links.map((link) => {
						return (
							<div
								className={classes.navbarLink}
								key={link.content}
							>
								<NavLink
									to={link.href}
									className={({ isActive }) =>
										isActive ? "active" : ""
									}
								>
									{link.content}
								</NavLink>
							</div>
						);
					})}
				</div>

				<div>
					<div
						className={classes.navbarToggles}
						onClick={() => {
							if (lang) {
								setLang(!lang);
							} else {
								setLang(true);
							}
						}}
					>
						<div className={classes.navbarToggleMiniBox}>
							<p>TR</p>
						</div>
						<div className={classes.navbarToggleMiniBox}>
							{lang ? (
								<FaToggleOff
									className={classes.navbarToogleIcon}
								/>
							) : (
								<FaToggleOn
									className={classes.navbarToogleIcon}
								/>
							)}
						</div>
						<div className={classes.navbarToggleMiniBox}>
							<p>ENG</p>
						</div>
					</div>
					<div
						className={classes.navbarToggles}
						onClick={() => {
							if (theme) {
								setTheme(!theme);
							} else {
								setTheme(true);
							}
						}}
					>
						<div className={classes.navbarToggleMiniBox}>
							<MdOutlineDarkMode />
						</div>
						<div className={classes.navbarToggleMiniBox}>
							{theme ? (
								<FaToggleOff
									className={classes.navbarToogleIcon}
								/>
							) : (
								<FaToggleOn
									className={classes.navbarToogleIcon}
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
