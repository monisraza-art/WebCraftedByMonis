import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./Footer";
import ThemeProvider from "@/theme/theme-provider";
import './globals.css'
import TopLoader from "./components/TopLoader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fredoka = Fredoka({
  weight: '400',
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "CraftedByMonis- eCommerce Consultant & Digital Solutions Expert",
  description: "Helping businesses thrive in the digital world through custom-tailored eCommerce strategies. With expertise in creating seamless online shopping experiences, I provide end-to-end solutions from platform selection to design and optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body className={`${fredoka.className} `}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TopLoader/>
        <Navbar/>
        {children}
        <Footer/>
        </ThemeProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
