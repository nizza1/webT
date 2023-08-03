"use client"

import React, { useEffect, useRef, useState } from 'react';

import styles from './styles.module.css'

//Framer Motion 
import { motion, useAnimation } from 'framer-motion';

//Icons
import { AiOutlineHtml5} from 'react-icons/ai';
import { DiReact} from 'react-icons/di';
import { FaSass , FaNode} from 'react-icons/fa';
import { IoLogoHtml5 , IoLogoJavascript} from 'react-icons/io';
import { BiLogoMongodb} from 'react-icons/bi';
/* import { TbBrandCss3 } from '@react-icons/tb'; */
/* import {TbBrandPrisma , TbBrandNextjs} from '@react-icons/tb'; */


const Tech = () => {


  const [scrollX, setScrollX] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef(null);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const containerTop = container.getBoundingClientRect().top;
    const containerBottom = container.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (containerTop < windowHeight && containerBottom > 0) {
      // The container is in the viewport
      const newScrollX = -(window.scrollY - containerTop);
      setScrollX(newScrollX);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      x: scrollX,
      transition: { type: 'tween' }, // You can customize the animation transition here
    });
  }, [scrollX, controls]);



  return (
    <div className={styles.container} ref={containerRef} >
      <div className={styles.dropShad}></div>
        <motion.div className={styles.iconContainer} style={{ x: controls }}>
            
            <div className={styles.iconBox}>
              <FaSass />
            </div>
            <div className={styles.iconBox}>
              <FaNode />
            </div>
        {/*     <div className={styles.iconBox}>
              <TbBrandCss3 />
            </div>
            <div className={styles.iconBox}>
              <TbBrandPrisma />
            </div>
            <div className={styles.iconBox}>
              <TbBrandNextjs />
            </div> */}
            <div className={styles.iconBox}>
              <DiReact />
            </div>


            <div className={styles.iconBox}>
              <AiOutlineHtml5 />
            </div>

            <div className={styles.iconBox}>
              <BiLogoMongodb />
            </div>
            <div className={styles.iconBox}>
              <IoLogoJavascript />
            </div>
            <div className={styles.iconBox}>
              <IoLogoHtml5 />
            </div>
            
            
        </motion.div>
    </div>
  )
}

export default Tech