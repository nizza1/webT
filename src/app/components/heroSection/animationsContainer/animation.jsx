"use client"

import React from 'react'
import styles from './styles.module.css'
import Lottie from "lottie-react";
import background from '@app/animations/herooanimation.json';

const Animation = () => {

  return (
    <div className={styles.animationContainer}>
        <Lottie className={styles.theAnimation}
       animationData={background} 
       loop={false}
       />
    </div>
  )
}

export default Animation