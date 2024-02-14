import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./reduxProvider";
// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
export const revalidate = 0;

export const metadata = {
  title: "Home",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body className=" flex flex-col h-full">
        <ReduxProvider>
          <Navbar />
          <main className="flex-1 conatiner">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
