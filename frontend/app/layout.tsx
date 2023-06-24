'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page'
import Details from './details'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Router>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/details" Component={Details} />
          </Routes>
        </Router>
      </body>
    </html>
  )
}
