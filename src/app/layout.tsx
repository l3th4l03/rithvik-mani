import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const geistRegular = localFont({
  src: [
    {
      path: "../../assets/fonts/geist/Geist-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-geist-regular",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rithvik Mani Personal Website",
  description: "Interactive portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${geistRegular.variable} font-sans`} style={{ fontFamily: 'var(--font-geist-regular)' }}>{children}</body>
    </html>
  );
} 