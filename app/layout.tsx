import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./transitions.css";
import { ThemeProviderWrapper } from "@/components/ThemeProviderWrapper";

const clash = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay-Variable.woff2",
      weight: "200 700",
      style: "normal",
    },
  ],
  variable: "--font-clash",
});

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
      <body
        className={`${clash.variable} font-clash page-transition bg-white dark:bg-[#1A1A1A] text-[#4A4A4A] dark:text-white transition-colors duration-300`}
      >
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
