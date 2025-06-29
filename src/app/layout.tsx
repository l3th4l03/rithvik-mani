import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rithvik Mani - Personal BIOS",
  description: "An interactive portfolio simulating a modern BIOS interface.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="font-geist-mono">{children}</body>
    </html>
  );
} 