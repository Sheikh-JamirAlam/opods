import type { Metadata } from "next";
import { Outfit, Yellowtail } from "next/font/google";
import "./globals.css";

const outfitSans = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const yellowtailFont = Yellowtail({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-yellowtail",
});

export const metadata: Metadata = {
  title: "Opods Z1",
  description: "Get your own Opods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfitSans.variable} ${yellowtailFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
