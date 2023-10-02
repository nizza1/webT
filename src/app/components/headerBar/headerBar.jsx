"use client"

import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'

/* import { IoIosCode } from "react-icons/io"; */
import { TbCode } from "react-icons/tb";
import Image from 'next/image';
/* progress bar  */
import { motion, useScroll ,useSpring } from "framer-motion"


//componentes 
import ContactButton from '@app/components/buttons/contactButton/contactButton'

//store 
import useModalStore from '@app/stores/offerStore';

const logo = '/logoNuance.svg'


const HeaderBar = ({ onContactButtonClick }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001
  });

   // Use the Zustand store to access the state and function
   const { isModalOpen, toggleModal } = useModalStore();

 /*  const [isModalOpen, setIsModalOpen] = useState(false);
  function toggleModal() {
    setIsModalOpen(!isModalOpen);
    console.log(isModalOpen);
  } */


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

            <ContactButton text='kontakt'
            funn={toggleModal}/>
            <Image 
            src={logo}
            width={50}
            height={50}
            alt='nuance studio'
            className={styles.logo}/>
        </div>

        
        </section>
  )
}

export default HeaderBar