import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import { NextScript } from 'next/script';
//components 
import HeaderBar from '@app/components/headerBar/headerBar'
import Footer from '@app/components/footer/footer'

//analysis
import { Analytics } from '@vercel/analytics/react';
import GoogleAnalytics from '@bradgarropy/next-google-analytics';




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nuancestudio',
  description: 'Professionelle Webentwicklung, Design und Marketing aus Nürnberg'
}


export default function RootLayout({ children }) {

  const Gtm = process.env.GTM
  const analytics = process.env.GOOGLE_ANALYTICS
  
  return (
    <html lang="en">  
    <Head>
    <link
          rel="canonical"
          href="https://www.nuastudio.de/"
          key="canonical"
        />

    </Head>
      
      <body className={inter.className}>

          <HeaderBar />
           {children}
           <Footer />
           <Analytics />
           <GoogleAnalytics measurementId={analytics} />
      </body>
    </html>
  )
}
