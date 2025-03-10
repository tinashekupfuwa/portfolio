import type { Metadata } from "next";
import "./globals.css";
import "./transitions.css";
import "./fonts.css";
import { ThemeProviderWrapper } from "@/components/ThemeProviderWrapper";

export const metadata: Metadata = {
  title: "Tinashe Kupfuwa",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-clash page-transition bg-white dark:bg-[#1A1A1A] text-[#4A4A4A] dark:text-white transition-colors duration-300 min-h-screen">
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
