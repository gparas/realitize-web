import type { Metadata, Viewport } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Realitize - AI Automation Partner",
  description: "We build  custom AI systems that align with enterprise goals.",
};

export const viewport: Viewport = {
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
