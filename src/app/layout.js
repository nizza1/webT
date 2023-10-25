import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import Script from 'next/script'
import localFont from 'next/font/local'
//components 
import HeaderBar from '@app/components/headerBar/headerBar'
import Footer from '@app/components/footer/footer'

//analysis
import { Analytics } from '@vercel/analytics/react';
import GoogleAnalytics from '@bradgarropy/next-google-analytics';




const inter = Inter({ subsets: ['latin'] })

const interBold = localFont({ 
  src: './fonts/Inter/static/Inter-Bold.ttf', 
  variable: '--inter-bold' 
})

const interReg = localFont({ 
  src: './fonts/Inter/static/Inter-Regular.ttf', 
  variable: '--inter-reg' 
})

const interThin = localFont({ 
  src: './fonts/Inter/static/Inter-Thin.ttf', 
  variable: '--inter-thin' 
})

const interVar = localFont({ 
  src: './fonts/Inter/vari.ttf', 
  variable: '--inter-var' 
})


export const metadata = {
  title: 'Website erstellen lassen | Kostenlose Beratung | Design & Entwicklung',
  description: 'Professionelle Webentwicklung, Design und Marketing aus Nürnberg'
}


export default function RootLayout({ children }) {

 /*  const Gtm = process.env.GTM */
  const analytics = process.env.GOOGLE_ANALYTICS
  const hot = process.env.HOT_JAR

  
  return (
    <html lang="en">  
    <Head>
    <link
          rel="canonical"
          href="https://www.nuastudio.de/"
          key="canonical"
        />
    </Head>
      
      <body className={`${interBold.variable} ${interReg.variable} ${interThin.variable} ${interVar.variable}`}>

          <HeaderBar />
           {children}
           <Footer />
           <Analytics debug={true}/>
           <GoogleAnalytics measurementId={analytics} />

           <Script strategy='afterInteractive'>
           {`
           (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3704328,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
           </Script>
      </body>
    </html>
  )
}
