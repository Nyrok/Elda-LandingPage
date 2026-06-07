import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const body = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

// logo face — Aquatico: geometric caps, bar-less triangular A
const logo = localFont({
  src: "./fonts/Aquatico-Regular.otf",
  variable: "--font-logo",
  weight: "400",
});

export const metadata: Metadata = {
  title: "ELDA",
  description:
    "Elda is an AI-powered robotic arm that helps elderly people live independently — managing medication, watching over them, and acting in an emergency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${logo.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
