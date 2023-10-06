import '../src/app/globals.css'
import { Inter } from 'next/font/google'

//components 

//analysis
import { Analytics } from '@vercel/analytics/react';
/* import Providers from '@app/provider' */

import Layout from '@app/components/layout/layout';


export const metadata = {
  title: 'Nuance',
  description: 'NUANCESTUDIO',
}

export default function Pages({ Component, pageProps }) {
  return (
       <Layout >
         <Component {...pageProps} />
       </Layout>
         
  )
}