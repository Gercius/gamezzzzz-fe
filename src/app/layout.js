import Footer from "../../components/footer/Footer";
import GameCards from "../../components/game-cards/GameCards";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gamezzzzz',
  description: 'Gamezzzzz',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={`${inter.className} bg-main-background min-h-screen`}>
          <Header />
          <div className="flex">
            <Sidebar />
            <GameCards />
          </div>
          {children}
          <Footer /> 
        </body>
    </html>
  )
}
