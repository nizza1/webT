"use client"
import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import {useState , useRef ,useEffect} from 'react'


import {IoIosArrowForward , IoIosArrowBack} from 'react-icons/io'

import Title from '../title-gr/title-gr'

const references = [
  { key: 'refer2S', value: '/reference/girafS-min.png' },
  { key: 'refer2', value: '/reference/girafB-min.png' },
  { key: 'refer1S', value: '/reference/rostockS-min.png' },
  { key: 'refer5S', value: '/reference/comservS-min.png' },
  { key: 'refer6', value: '/reference/conservB-min.png' },
  { key: 'refer7', value: '/reference/horosB-min.png' },
  { key: 'refer7S', value: '/reference/horosS-min.png' },
  { key: 'refer8', value: '/reference/imcB-min.png' },
  { key: 'refer8S', value: '/reference/imcS-min.png' },
  { key: 'refer10', value: '/reference/quantumB-min.png' },
  { key: 'refer10S', value: '/reference/quantumS-min.png' },
  { key: 'refer1', value: '/reference/rostockB-min.png' },
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
    <div className={styles.container}>

      <div className={styles.titleContainer}>
      <h1>Einige unserer Projecte </h1>
   
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