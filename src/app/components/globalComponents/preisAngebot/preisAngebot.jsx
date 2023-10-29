"use client"

import React from 'react'
import styles from './styles.module.css'

import { useRef , useState } from "react";
import { motion, useScroll } from "framer-motion";


const preisAngebot = () => {
  

  const containerRef = useRef(null);
  const cardRef = useRef(null);

  const { scrollXProgress } = useScroll({ container: containerRef });

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
        left: scrollPosition + containerRef.current.offsetWidth,
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


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.circleCo}>

        <svg width="70" height="70" viewBox="0 0 100 100" className={styles.svg}>
        <circle cx="50" cy="50" r="40" pathLength="1" className={styles.svgCircle} />

        <motion.circle
          cx="50"
          cy="50"
          r="40"
          pathLength="1"
          className={styles.indicator}
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
        </div>
      </div>
      
      <div ref={containerRef} 
      onScroll={handleScroll} 
      className={styles.cBody}>
        <div ref={cardRef} className={styles.questionContainer}>
          
          <div className={styles.an}>
          <label className={styles.label}>
          In welche Branche sind Sie tätig:
          <input
            type="text"
            name="branche"
           /*  value={formData.branche}
            onChange={handleInputChange} */
          />
        </label>
          </div>
        </div>
        <div ref={cardRef} className={styles.questionContainer}>
          <h1>2</h1>
        </div>
        <div ref={cardRef} className={styles.questionContainer}>
          <h1>3</h1>
        </div>
        <div ref={cardRef} className={styles.questionContainer}>
          <h1>4</h1>
        </div>
      </div>

      <div className={styles.cFooter}>
        <div className={styles.buttonsContainer}>
             <button className={styles.btnLeft} 
             onClick={handleScrollLeft}>
             &lt;
             </button>
             <button className={styles.btnRight} 
             onClick={handleScrollRight}>
             &gt;
           </button>
        </div>
      </div>
    </div>
  )
}

export default preisAngebot