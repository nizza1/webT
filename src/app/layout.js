import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
//components 
import HeaderBar from '@app/components/headerBar/headerBar'
import Footer from '@app/components/footer/footer'

//analysis
import { Analytics } from '@vercel/analytics/react';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nuance',
  description: 'NUANCESTUDIO',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">  
    <Head>
        {/* Add the Google Search Console meta tag here */}
        <meta name="google-site-verification" content="google023d784adb01f1f1.html" />
        <meta name="google-site-verification" content="uGS6LItWixqE4QRKG35AhF8KcmpdSzJf3OZrEhzZYPw" />
      </Head>
      <body className={inter.className}>

          <HeaderBar />
           {children}
           <Footer />
           <Analytics />
      </body>
    </html>
  )
}
