"use client"

import React from 'react'
import styles from './styles.module.css'
import Lottie from 'lottie-react'



import animationD from '@app/animations/vvv.json'
const Map = () => {

  return (
    <div className={styles.container}>
        <Lottie 
        animationData={animationD}/>
    </div>
  )
}

export default Map