import './globals.css'
import { Rubik } from 'next/font/google'
import NavBar from '@/app/components/site-navbar'
import Footer from './components/site-footer'
import SearchForm from './components/search-form'

const rubik = Rubik({ subsets: ['hebrew'] })

export const metadata = {
  title: 'Data Gov',
  description: 'Open gov data',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir='rtl'>
      <body className={rubik.className}>
        <NavBar />
        <SearchForm />
        {children}
        <Footer />
      </body>
    </html>
  )
}
