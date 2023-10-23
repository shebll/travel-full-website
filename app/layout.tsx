import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header/Header";
import ScrollProgressBar from "@/components/scrollingHock/ScrollProgressBar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel App",
  description: "Travel and explore countries",
  icons: {
    icon: "images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`px-2 md:px-0 ${inter.className}`}>
        <Header />
        <ScrollProgressBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
