import type { Metadata } from "next";
import { Bodoni_Moda } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Julia & Justin's Wedding",
  description: "Julia & Justin's Wedding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodoniModa.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    );
  }
