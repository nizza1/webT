"use client"

import React from 'react'
import styles from './styles.module.css'
import Lottie from "lottie-react";
import background from '@app/animations/herooanimation.json';

const Animation = () => {

    const animationSpeed = 0.2;
  return (
    <div className={styles.animationContainer}>
        <Lottie className={styles.theAnimation}
       animationData={background} 
       speed={animationSpeed}/>
    </div>
  )
}

export default Animation