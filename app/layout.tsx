import "./globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import ThemeProviders from "./ThemeProvider";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
	title: "NextJS Template by OmarAfet",
	description: "NextJS Template with TypeScript and TailwindCSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="!scroll-smooth">
			<body className="bg-white text-OpenColor-gray-7 dark:bg-OpenColor-gray-9 dark:text-OpenColor-gray-1">
				<Toaster position="top-center" reverseOrder={false} />
				<ThemeProviders>
					<Navbar />
					<main className="mt-8 px-16 container m-auto">{children}</main>
					<Footer />
				</ThemeProviders>
			</body>
		</html>
	);
}
