


import React from 'react'
import styles from './styles.module.css'
import {BsSend} from "react-icons/bs"
import { usePathname } from 'next/navigation'
import { track } from '@vercel/analytics/react'
//components 

const ContactButton = ({text }) => {


  const pathname = usePathname()

  const trackScrollToContactSection = () => {
    track('scroll to contact section clicked');
  };

  const handleScroll = (href) => {
    // Prevent the default behavior of the anchor tag
    if (href) {
      const targetId = href.replace(/.*\#/, "");

      // Get the element by id and use scrollIntoView with smooth behavior
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
       { pathname === '/' && (
        <button className={styles.contactButton}
       onClick={() => {
        trackScrollToContactSection();
        handleScroll('#contact-section');
      }}
      
          >{text} 
          <span className={styles.spot}></span>
          <span className={styles.span}>
              <BsSend className={styles.icon}/></span>
        </button> )}
    </>

  )
}

export default ContactButton