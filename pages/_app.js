import '../src/app/globals.css'
import { Inter } from 'next/font/google'

//components 
import HeaderBar from '@app/components/headerBar/headerBar'
import Footer from '@app/components/footer/footer'

//analysis
import { Analytics } from '@vercel/analytics/react';
/* import Providers from '@app/provider' */

import Layout from '@app/components/layout/layout';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nuance',
  description: 'NUANCESTUDIO',
}

export default function Pages({ Component, pageProps }) {
  return (
       <Layout>
         <Component {...pageProps} />
       </Layout>
         
  )
}