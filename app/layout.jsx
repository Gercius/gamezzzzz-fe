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
        <body className={`${inter.className} bg-main-background`}>
          <Header />
          <div className="flex">
            <div>
              <Sidebar />
            </div>
            <div className="w-screen mx-20 min-h-screen">
              {children}
            </div>
          </div>
        </body>
    </html>
  );
}
