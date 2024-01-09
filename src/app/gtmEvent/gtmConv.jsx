"use client"

import { sendGTMEvent } from '@next/third-parties/google'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react';


const GTMConversion = () => {

const pathName = usePathname();
// Get the current date and time
const currentTime = new Date();

// Format the current time as a string
const formattedTime = currentTime.toISOString();

useEffect(() => {
    // Conditionally send Google Ads conversion event on the home page
    if (pathName === '/') {
      sendGTMEvent({
        phone_conversion_number: '+49 911 37433917',
        time : formattedTime,

      });
    }
  }, []); 

  return null; 
};

export default GTMConversion;