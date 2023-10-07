import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import { NextScript } from 'next/script';
//components 
import HeaderBar from '@app/components/headerBar/headerBar'
import Footer from '@app/components/footer/footer'

//analysis
import { Analytics } from '@vercel/analytics/react';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nuance',
  description: 'Professionelle Webentwicklung, Design und Marketing aus Nürnberg'
}


export default function RootLayout({ children }) {

  const Gtm = process.env.GTM
  
  return (
    <html lang="en">  
    <Head>
    <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-${Gtm}');`,
        }} />
    </Head>
      
      <body className={inter.className}>
      <noscript dangerouslySetInnerHTML={{
    __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-${Gtm}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
  }} />

          <HeaderBar />
           {children}
           <Footer />
           <Analytics />
      </body>
    </html>
  )
}
