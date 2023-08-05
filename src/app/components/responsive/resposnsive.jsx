import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import Title from '../title-gr/title-gr'
import Slider from '../slider/slider'

const Resposnsive = () => {
  return (
    <div className={styles.container}>

        <div className={styles.textSliderContainer}>
            <div className={styles.textContainer}>
            <Title text='Letzte Projekte'/>
            </div>
        

        <Slider />

        </div>
        

        
       {/*  <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="/images/responsive-b.png"
          width={1000}
          height={1000}
          alt="responsive design "
         /> 
        </div>*/}

    </div>
       
  )
}

export default Resposnsive