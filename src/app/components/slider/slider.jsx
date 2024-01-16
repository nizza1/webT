"use client"
import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import {useState , useRef ,useEffect} from 'react'


import {IoIosArrowForward , IoIosArrowBack} from 'react-icons/io'

import Title from '../title-gr/title-highlight-d-bg/highlight'


import girafI from 'public/reference/giraf.png'
import avisaI from 'public/reference/avisa.png'
import comservI from 'public/reference/comserv.jpg'
import horosI from 'public/reference/horos.jpg'
import industrialI from 'public/reference/industrial.jpg'
import quantumI from 'public/reference/quantum.jpg'
import rostockI from 'public/reference/rostock.png'
import yachtI from 'public/reference/yacht-travel.jpg'

const references = [

  { key: 'avisa referens', value: avisaI },
  { key: 'reference', value: comservI },
  { key: 'reference', value: industrialI },
  { key: 'reference', value: quantumI },
  { key: 'giraf referens ', value: girafI },
  { key: 'reference', value: horosI },
  { key: 'reference', value: yachtI },
  { key: 'reference', value: rostockI },
  

];



const Slider = () => {
    const containerRef = useRef(null);
    const cardRef = useRef(null);
    
    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScrollPosition, setMaxScrollPosition] = useState(0);

    const handleScrollLeft = () => {
        containerRef.current.scrollTo({
          left: scrollPosition - cardRef.current.offsetWidth,
          behavior: 'smooth',
        });
      };
    
      const handleScrollRight = () => {
        containerRef.current.scrollTo({
          /* left: scrollPosition + containerRef.current.offsetWidth, */
          left: scrollPosition + cardRef.current.offsetWidth,
          behavior: 'smooth',
        });
      };
  
    const handleScroll = () => {
        setScrollPosition(containerRef.current.scrollLeft);
        setMaxScrollPosition(
          containerRef.current.scrollWidth - containerRef.current.offsetWidth
        );
        console.log(maxScrollPosition);
      };

      useEffect(() => {
        setMaxScrollPosition(
          containerRef.current.scrollWidth - containerRef.current.offsetWidth
        );

        
      }, []);

  return (
    <div className={styles.container} id='referenzen'>

      <div className={styles.titleContainer}>
        <h2><Title text='Einige unserer Projekte' /></h2>   
      </div>

    

<div className={styles.sliderContainer}>

      <div
        className={`${styles.textContainer}`}
        ref={containerRef}
        onScroll={handleScroll}
      >
        

        {references.map((reference, index) => (
         <div className={styles.textItem} key=       {index} ref={cardRef}>
          <div className={styles.overShadow}></div>
           <div className={styles.imageContainer}>
             <Image
               className={styles.refImage}
               src={reference.value}
               width={300}
               height={400}
               placeholder='blur'
               alt={reference.key}
             />
           </div>
         </div>
       ))}

      </div>

    
    </div>
    <div className={styles.buttonsContainer}>
      <button
        className={`${styles.scrollButton} ${styles.scrollButtonLeft} ${
          scrollPosition === 0 ? styles.disabled : ''
        }`}
        onClick={handleScrollLeft}
      >
         <IoIosArrowBack  className={styles.arrowL}/>
      </button>

      <button
        className={`${styles.scrollButton} ${styles.scrollButtonRight} ${
          scrollPosition >= maxScrollPosition ? styles.disabled : ''
        }`}
        onClick={handleScrollRight}
      >
        <IoIosArrowForward className={styles.arrowR} />
      </button>
      </div>

    </div>
  )
}

export default Slider