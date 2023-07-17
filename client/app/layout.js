import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { AppProvider } from "./AppContext";

export const metadata = {
	title: "Selim Yaman",
	description: "Selim Yaman Kişisel Web Sitesi",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<AppProvider>
					<Navbar />
					{children}
					<Footer />
				</AppProvider>
			</body>
		</html>
	);
}
