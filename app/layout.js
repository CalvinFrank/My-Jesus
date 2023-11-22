import { useRouter } from 'next/navigation'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'My Jesus',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body className={inter.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
