import { Inter } from 'next/font/google'
import "./styles.scss";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
      default: 'Next.js 14 Homepage',
      template: '%s | Next.js 14'
  },
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="container">
          <Navbar />
          {children}
          <Footer />
      </div>
      </body>
    </html>
  )
}
