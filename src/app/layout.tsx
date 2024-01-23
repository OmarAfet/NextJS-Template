import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { ThemeProvider } from "@/providers/ThemeProvider";
import MainProvider from "@/providers/MainProvider";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NextJS Template by @OmarAfet",
	description: "A NextJS template with TailwindCSS, TypeScript, and more. made by @OmarAfet",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className="!scroll-smooth" suppressHydrationWarning>
			<body className={`${font.className} h-screen antialiased flex flex-col`}>
				<MainProvider>
					<Header />
					<main className="flex-1 container">{children}</main>
					<Footer />
				</MainProvider>
			</body>
		</html>
	);
}