"use client"

import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';
/* import Lottie from 'lottie-react'; */
/* import myAnimation from '@app/animations/animation_ll5965nn.json'; */

import { motion, useScroll , useSpring } from "framer-motion"

const Tes = () => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({ container: ref });
    /* const { scrollYProgress } = useScroll(); */
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 400,
        damping: 40,
        restDelta: 0.001
      });


    return (
      <div className={styles.container}>
        
        

         <div className={styles.refContainer} >
            <div ref={ref} className={styles.li}>

            


                <div className={styles.lic}>
                <div className={styles.stickyChild}>

<div className={styles.childBar}>

   <div className={styles.progressBar}>
      <div className={styles.barContainer}>
       <motion.div style={{ scaleX }} 
       className={styles.barT}/>
     </div>
   </div>
</div>

</div>
                </div>
                
               
                </div>
            
           
         </div>

      </div>
    );
  };
  
  export default Tes;


  /* 
  <Lottie animationData={animationData} progress={animationProgress} />
  */