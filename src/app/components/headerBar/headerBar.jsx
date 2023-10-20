"use client"

import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'

import Link from 'next/link'
import Image from 'next/image';


/* progress bar  */
import { motion, useScroll ,useSpring } from "framer-motion"


//componentes 
import ContactButton from '@app/components/buttons/contactButton/contactButton'

//store 
/* import useModalStore from '@app/stores/offerStore'; */

const logo = '/logoNuance.svg'


const HeaderBar = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001
  });

   // Use the Zustand store to access the state and function
  /*  const { isModalOpen, toggleModal } = useModalStore(); */


  return (
    <> <div className={styles.progressBar}>
    <motion.div 
    className={styles.bar}>

    <div className={styles.barContainer}>
    <motion.div style={{ scaleX }} 
    className={styles.barT}/>
    </div>

     </motion.div > 
    </div>
    <section className={classNames(styles.container)}>
     
        <div className={classNames(styles.logButContainer, 'inContainer')}>

            <ContactButton text='Kontakt'
            position="header"
            />
      
          

          <Link href='/'>
          
            <Image 
            src={logo}
            width={40}
            height={40}
            alt='nuance studio'
            className={styles.logo}/>
            </Link>
   
          
            
        </div>

        
        </section>
        </>
  )
}

export default HeaderBar