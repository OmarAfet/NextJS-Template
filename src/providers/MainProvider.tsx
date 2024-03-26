import { ReactNode } from "react";
import { ThemeProvider } from "./ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";

export default function MainProvider({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <Analytics />
      <SpeedInsights />
      <Toaster />
    </ThemeProvider>
  );
}
