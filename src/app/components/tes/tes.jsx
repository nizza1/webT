"use client"

import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Lottie from 'lottie-react';
import myAnimation from '@app/animations/animation_ll5965nn.json';

import { motion, useScroll } from "framer-motion"

const Tes = () => {

    const { scrollYProgress } = useScroll();
  
    return (
      <div className={styles.container}>
        test
        <motion.div 
        className={styles.bar}>

        <div className={styles.barContainer}>
        <motion.div style={{ scaleX: scrollYProgress }} 
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