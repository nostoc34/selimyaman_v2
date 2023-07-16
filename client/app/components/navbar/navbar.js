import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../../public/assets/logo.svg";

export default function Navbar() {
	return (
		<div>
			<div>
				<Image src={logo} />
				Selim Yaman
			</div>
			<div>
				<div>
					<Link href="/">Ben</Link>
				</div>
				<div>
					<Link href="/blog">Blog</Link>
				</div>
				<div>
					<Link href="/iletisim">İletişim</Link>
				</div>
			</div>
		</div>
	);
}
