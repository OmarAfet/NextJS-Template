import "@/src/styles/globals.scss";
import Navbar from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";
import MainProvider from "../providers/MainProvider";

const font = Inter({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
	title: {
		default: "NextJS Template by OmarAfet",
		template: "%s | NextJS Template",
	},
	description: "A Next.js + Tailwindcss Template made by OmarAfet",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="!scroll-smooth" suppressHydrationWarning>
			<body className={`${font.className} flex flex-col min-h-screen`}>
				<Toaster position="top-center" reverseOrder={false} />
				<MainProvider>
					<Navbar />
					<main className="flex-1">{children}</main>
					<Footer />
				</MainProvider>
			</body>
		</html>
	);
}
