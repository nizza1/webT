"use client"
import React from 'react'
import styles from './styles.module.css'

import useStore from '@app/stores/navStore';
import { TiLocationArrow } from "react-icons/ti";
import {TiSocialLinkedin} from "react-icons/ti"
import {BsWhatsapp} from 'react-icons/bs'

//framer motion 
import { motion, AnimatePresence } from "framer-motion"
import Stairs from './stairs/stairs'


const NavList = () => {

  const { isActive, toggleIsActive } = useStore();
  const handleScroll = (href) => {
    // Prevent the default behavior of the anchor tag
    toggleIsActive();
    if (href) {
      const targetId = href.replace(/.*\#/, "");

      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.container}>

           

        <div className={`${styles.innerContainer}`} >

        <AnimatePresence mode='wait'>

        <motion.div
            initial={{ y: -400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -400, opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
             <button className={`${styles.links} `}
         onClick={()=> {
              handleScroll('#referenzen');
            }
          }> 
          <TiLocationArrow  className={styles.icon}/>
          Projekte</button>


        </motion.div>

        <motion.div
            initial={{ y: -400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -400, opacity: 0 }}
            transition={{ duration: 1 }}
          >
             <button 
          className={styles.links}
           onClick={()=> {
              handleScroll('#aboutus');
            }
          }>
            <TiLocationArrow  className={styles.icon}/>
            Team</button>
            
        </motion.div>

        <motion.div
            initial={{ y: -400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -400, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
                <button 
            className={styles.links}
             onClick={()=> {
              handleScroll('#contact-section');
            }
          }>
            <TiLocationArrow  className={styles.icon}/>
            Kontakt</button>

            
        </motion.div>

        <motion.div
            initial={{ y: -400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -400, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button 
            className={styles.links}
             onClick={()=> {
              handleScroll('#FAQs');
            }
          }>
            <TiLocationArrow  className={styles.icon}/>
            FAQs</button>
            
        </motion.div>

        <motion.div
            initial={{ y: -400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -400, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
              <div className={styles.social}>

               <a href='https://www.linkedin.com/in/chrisbohdan/'
                target="_blank"
                 className={styles.singleIcon}>
                <TiSocialLinkedin />
                </a>

                <a href='https://wa.me/+49015770390746/'
                target="_blank"
                 className={styles.singleIcon}>
                 <BsWhatsapp />
                 </a>               
               </div>
            
        </motion.div>
  
        </AnimatePresence>

       
        </div>

    
          <AnimatePresence mode="wait">
            
          <Stairs />

          </AnimatePresence>
      


    </div>
  )
}

export default NavList