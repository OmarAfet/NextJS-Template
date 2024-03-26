import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/header/Header";
import { siteConfig } from "@/config/site";
import { TailwindIndicator } from "@/components/common/TailwindIndicator";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import MainProvider from "@/providers/MainProvider";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("relative flex min-h-screen flex-col bg-background", font.className)}>
        <MainProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <TailwindIndicator />
        </MainProvider>
      </body>
    </html>
  );
}
