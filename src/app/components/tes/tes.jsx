"use client"

import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Lottie from 'lottie-react';
import myAnimation from '@app/animations/animation_ll5965nn.json';

import { motion, useScroll , useSpring} from "framer-motion"

const Tes = () => {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });
  
    return (
      <div className={styles.container}>
        test
        <motion.div 
        className={styles.bar}>

        <div className={styles.barContainer}>
        <motion.div style={{ scaleX }} 
        className={styles.barT}/>
        </div>

         </motion.div > 

      </div>
    );
  };
  
  export default Tes;


  /* 
  <Lottie animationData={animationData} progress={animationProgress} />
  */