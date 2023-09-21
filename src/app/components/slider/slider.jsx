"use client"
import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import {useState , useRef ,useEffect} from 'react'


import {IoIosArrowForward , IoIosArrowBack} from 'react-icons/io'

testImage = '/avisa-min.png'


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
      };

      useEffect(() => {
        setMaxScrollPosition(
          containerRef.current.scrollWidth - containerRef.current.offsetWidth
        );
      }, []);

  return (
    <div className={styles.container}>

<div className={styles.sliderContainer}>

      <div
        className={`${styles.textContainer}`}
        ref={containerRef}
        onScroll={handleScroll}
      >
        
        <div className={styles.textItem} ref={cardRef}>
           

         <div className={styles.imageContaine}>
          <Image  
          className={styles.refImage}
          src={testImage}
          width={300}
          height={300}
          alt='just reference'
          
          />
            </div>
        </div>

        <div className={styles.textItem}>
            <div className={styles.textItemBackground}></div>
            <div className={styles.textItemBackgroundY}></div>
            <div className={styles.blur}></div>
            
            
            <p className={styles.textItemTitle}>--</p> <br /> <p className={styles.textItemContent}>
            Referenzen </p>
        </div>
        <div className={styles.textItem}>
        <div className={styles.textItemBackground}></div>
            <div className={styles.textItemBackgroundY}></div>
            <div className={styles.blur}></div>
            
        <p className={styles.textItemTitle}>--</p>  <br />
         <p className={styles.textItemContent}>
         Referenzen
        </p></div>

        <div className={styles.textItem}>
        <div className={styles.textItemBackground}></div>
            <div className={styles.textItemBackgroundY}></div>
            <div className={styles.blur}></div>
        <p className={styles.textItemTitle}>--</p>  <br />
        <p className={styles.textItemContent}> refferenzen</p> </div>

        <div className={styles.textItem}>
        <div className={styles.textItemBackground}></div>
            <div className={styles.textItemBackgroundY}></div>
            <div className={styles.blur}></div>
        <p className={styles.textItemTitle}>-- </p> <br /> 
        <p className={styles.textItemContent}> 
        Referenzen
        </p></div>
       
        {/* Add more text containers as needed */}
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

    </div>
  )
}

export default Slider