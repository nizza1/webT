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
  description: 'Professionelle Webentwicklung, Design und Marketing aus Nürnberg',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">  
        <Head>
        <meta
         name="google-site-verification" 
         content="uGS6LItWixqE4QRKG35AhF8KcmpdSzJf3OZrEhzZYPw" 
         />
         <link rel="icon" href="/favicon.ico" sizes="any" />
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
