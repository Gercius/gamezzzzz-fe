import Image from "next/image";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gamezzzzz',
  description: 'Gamezzzzz',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body 
          className={`${inter.className} bg-main-background text-gray-200`}
        >
          <Header />
          <div className="mt-[50px]">
            {children}
          </div>
        </body>
    </html>
  );
}
