import '../src/app/globals.css'
import { Inter } from 'next/font/google'

//components 

//analysis
import { Analytics } from '@vercel/analytics/react';
/* import Providers from '@app/provider' */

import Layout from '@app/components/layout/layout';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nuance',
  description: 'Professionelle Webentwicklung, Design und Marketing aus Nürnberg'
}



export default function Pages({ Component, pageProps }) {
  return (
 
      <>
    
      <Layout className={inter.className}>
         <Component {...pageProps} />
       </Layout>

       </>
      

    
       
         
  )
}