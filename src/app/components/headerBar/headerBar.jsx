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
import NavButton from './navButton/navButton'
import NavList from './navList/navList'

//store 
import useStore from '@app/stores/navStore'

const logo = '/logoNuance.svg'
const logoWithText = '/logowithtext.svg'


const HeaderBar = () => {
  const { isActive } = useStore();




  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001
  });


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

          <Link href='/'>
          
            <Image 
            src={logoWithText}
            width={140}
            height={40}
            alt='nuance studio'
            className={styles.logo}/>
            </Link>
            
        </div>

        </section>
        <div className={styles.navButtonContainer}>
            <NavButton />
        </div>

        {
          isActive ?  <div className={styles.navListContainer}>
          <NavList />
        </div>
          /*   */
          : null
        }
       
        </>
  )
}

export default HeaderBar