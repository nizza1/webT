"use client"

import { sendGTMEvent } from '@next/third-parties/google'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react';


const GTMEventSender = () => {

const pathName = usePathname();
// Get the current date and time
const currentTime = new Date();

// Format the current time as a string
const formattedTime = currentTime.toISOString();
  useEffect(() => {

    sendGTMEvent({

        event: 'page_url',
        page_url: pathName,
        time: formattedTime,
       
      });
  
  }, [pathName]); // Empty dependency array ensures this effect runs once when the component mounts

  return null; // This component doesn't render anything
};

export default GTMEventSender;