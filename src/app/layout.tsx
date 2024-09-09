import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google";
import Navbar from "./components/navbar/Navbar";

export const metadata: Metadata = {
  title: "One Hand",
};

const urbanist = Urbanist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
