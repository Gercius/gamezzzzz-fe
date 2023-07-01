import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
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
        <body className={`${inter.className} bg-main-background`}>
          <Header />
          <div className="flex">
            <Sidebar />
            {children}
          </div>
        </body>
    </html>
  );
}
