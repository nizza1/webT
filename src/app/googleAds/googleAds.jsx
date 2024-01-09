"use client"

import { useEffect } from 'react';
import { usePathname } from 'next/navigation'

import Head from 'next/head';

import Script from 'next/script';



 export const Src = ()=> {
    return <Script 
            strategy='afterInteractive' 
            src='https://www.googletagmanager.com/gtag/js?id=AW-11459365015' 
            />
      
}



export const Conversion = ()=> {
    return (
    <Script strategy='afterInteractive' 
     dangerouslySetInnerHTML={{
        __html: `
        gtag('config', 'AW-11459365015/GAKYCPqX2IYZEJeRoNgq', {
            'phone_conversion_number': '+49 911 37433917'
          });
        `,
    }}
/>
)      
}




export const GoogleTagManagerScript = () => {
    const pathName = usePathname();

    useEffect(() => {
        // Update the page_path when the user navigates
        if (pathName !== undefined) {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'AW-11459365015', {
                page_path: window.location.pathname,
            });
        }
    }, [pathName]);

    return (
        <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-11459365015', {
                        page_path: window.location.pathname,
                    });
                `,
            }}
        />
    );
};


         

  // Google Ads script



  
