"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../public/assets/logo.svg";
import { useAppContext } from "../AppContext";


export default function Navbar() {
	const {lang, setLang} = useAppContext();
	return (
		<div>
			<div>
				<Image src={logo} />
				Selim Yaman
			</div>
			<div>
				<div>
					<Link href="/"> {lang ? "Ben" : "Me"} </Link>
				</div>
				<div>
					<Link href="/blog">Blog</Link>
				</div>
				<div>
					<Link href="/iletisim">{lang ? "İletişim" : "Contact"}</Link>
				</div>
			</div>
			<div>
				<button onClick={() => {
					if(lang) {
						setLang(!lang)
					} else {
						setLang(true)
					}
				}}>Dil</button>
			</div>
		</div>
	);
}
