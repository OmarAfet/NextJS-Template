import "./globals.css";
import Navbar from "@Components/Navbar";
import Footer from "@Components/Footer";
import Providers from "./Provider";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
	title: "NextJS Template",
	description: "NextJS Template with TypeScript and TailwindCSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body className="bg-white text-OpenColor-gray-7 dark:bg-OpenColor-gray-9 dark:text-OpenColor-gray-1">
				<Toaster position="top-center" reverseOrder={false} />
				<Providers>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
