import { Inter } from "next/font/google";
import "./globals.css";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body className=" flex flex-col h-full">
        <Navbar />
        <main className="flex-1 conatiner">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
