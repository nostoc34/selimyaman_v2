"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import "../../styles/navbar/navbar.scss";
import { useContext, useEffect, useState } from "react";
import MainContext from "../MainContext";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
	const { lang, setLang, theme, setTheme } = useContext(MainContext);
	const [isCollapsed, setCollapsed] = useState(false);
	const handleCollapseMenu = () => {
		if (isCollapsed) {
			setCollapsed(!isCollapsed);
		} else {
			setCollapsed(true);
		}
	};
	const links = [
		{ href: "/", content: lang ? "Ben" : "Me" },
		{ href: "/blog", content: "Blog" },
		{ href: "/iletisim", content: lang ? "İletişim" : "Contact" },
	];
	const router = useRouter();
	const pathName = usePathname();
	return (
		<div className="navbar-container">
			<div className="navbar-menu-container">
				<div
					className="navbar-logo-box"
					onClick={() => {
						router.push("/");
					}}
				>
					<Image id="navbar-logo" src={logo} alt="logo" />
					<h1 className="navbar-logo-text">Selim Yaman</h1>
				</div>

				<div
					className={`navbar-menu ${isCollapsed ? "collapsed" : ""}`}
				>
					<div className="navbar-links-box">
						{links.map((link) => {
							return (
								<div className="navbar-link-item" key={link.content}>
									<Link
										href={link.href}
										className={
											pathName === link.href
												? "active"
												: ""
										}
									>
										{" "}
										{link.content}{" "}
									</Link>
								</div>
							);
						})}
					</div>

					<div className="navbar-toggle-box">
						<div
							className="navbar-toggles"
							onClick={() => {
								if (lang) {
									setLang(!lang);
								} else {
									setLang(true);
								}
							}}
						>
							<div className="navbar-toggle-mini-box">
								<p>TR</p>
							</div>
							<div className="navbar-toggle-mini-box">
								{lang ? (
									<FaToggleOff className="navbar-toggle-icon" />
								) : (
									<FaToggleOn className="navbar-toggle-icon" />
								)}
							</div>
							<div className="navbar-toggle-mini-box">
								<p>ENG</p>
							</div>
						</div>
						<div
							className="navbar-toggles"
							onClick={() => {
								if (theme) {
									setTheme(!theme);
								} else {
									setTheme(true);
								}
							}}
						>
							<div className="navbar-toggle-mini-box">
								<MdOutlineDarkMode />
							</div>
							<div className="navbar-toggle-mini-box">
								{theme ? (
									<FaToggleOff className="navbar-toggle-icon" />
								) : (
									<FaToggleOn className="navbar-toggle-icon" />
								)}
							</div>
							<div className="navbar-toggle-mini-box">
								<MdOutlineLightMode />
							</div>
						</div>
					</div>
				</div>
				<GiHamburgerMenu
					onClick={handleCollapseMenu}
					className="navbar-hamburger-menu"
				/>
			</div>
		</div>
	);
}
