import '../src/app/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';
//components 

//analysis
import { Analytics } from '@vercel/analytics/react';
/* import Providers from '@app/provider' */

import Layout from '@app/components/layout/layout';

const inter = Inter({ subsets: ['latin'] })

/* export const metadata = {
  title: 'Nuance',
  description: 'Professionelle Webentwicklung, Design und Marketing aus Nürnberg'
} */



export default function Pages({ Component, pageProps }) {
  const defaultMetadata = {
    title: 'Nuance',
    description: 'Professionelle Webentwicklung, Design und Marketing aus Nürnberg',
  };
  return (
 
      <>
       <Head>
        <title>{defaultMetadata.title}</title>
        <meta name="description" content={defaultMetadata.description} />
      </Head>
    
      <Layout className={inter.className}>
         <Component {...pageProps} />
       </Layout>

       </>
      

    
       
         
  )
}