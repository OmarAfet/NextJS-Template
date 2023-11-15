import "./globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import ThemeProviders from "./ThemeProvider";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export const metadata: Metadata = {
	title: "NextJS Template by OmarAfet",
	description: "Latest Defualt NextJS App Template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="!scroll-smooth" suppressHydrationWarning>
			<body className={`${ubuntu.className} bg-white dark:bg-OpenColor-gray-9 text-OpenColor-gray-7 dark:text-OpenColor-gray-1`}>
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
