"use client"

import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Lottie from 'lottie-react';
import { motion , useViewportScroll} from 'framer-motion';
import myAnimation from '@app/animations/animation_ll5965nn.json';

const Tes = () => {
    const animationData = myAnimation;
    const [animationProgress, setAnimationProgress] = useState(0);
    const { scrollY } = useViewportScroll();
  
    const handleScroll = () => {
      const normalizedProgress = scrollY.get() / scrollRange;
      setAnimationProgress(normalizedProgress);
    };
  
    // Set the scroll range based on the content height
    const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
  
    return (
      <div className={styles.container}>
        test
  
        <motion.div onScroll={handleScroll} className={styles.scrollContainer}>
          {/* Render Lottie animation only on the client side */}
          {typeof window !== 'undefined' && (
            <Lottie animationData={animationData} progress={animationProgress} />
          )}
        </motion.div>
      </div>
    );
  };
  
  export default Tes;