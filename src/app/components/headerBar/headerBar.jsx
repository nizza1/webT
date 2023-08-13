'use client'

import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'

/* import { IoIosCode } from "react-icons/io"; */
import { TbCode } from "react-icons/tb";

/* progress bar  */
import { motion, useScroll ,useSpring } from "framer-motion"

//componentes 
import ContactButton from '@app/components/buttons/contactButton/contactButton'


const HeaderBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });
  return (
    <section className={classNames(styles.container)}>
      <div className={styles.progressBar}>
        <motion.div 
        className={styles.bar}>

        <div className={styles.barContainer}>
        <motion.div style={{ scaleX }} 
        className={styles.barT}/>
        </div>

         </motion.div > 
        </div>
        <div className={classNames(styles.logButContainer, 'inContainer')}>
            <ContactButton text='kontakt'/>
            <TbCode className={styles.logo}/>
        </div>

        
        </section>
  )
}

export default HeaderBar