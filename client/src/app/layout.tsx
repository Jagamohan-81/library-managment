import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
const inter = Inter({ subsets: ['latin'] })
import { Providers } from './store/Provider'

export const metadata: Metadata = {
  title: 'Library managment',
  description: 'An app developed by Jagamohan panda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main className='main-wraper'>
            {children}
          </main>
          <Footer />
        </Providers>

      </body>
    </html>
  )
}
