"use client"

import React, { useEffect, useRef, useState } from 'react';

import styles from './styles.module.css'

//Framer Motion 
/* import { motion, useAnimation } from 'framer-motion'; */

//Icons
/* import { AiOutlineHtml5} from 'react-icons/ai'; */
import { DiReact} from 'react-icons/di';
import { FaSass , FaNode} from 'react-icons/fa';
import { IoLogoHtml5 , IoLogoJavascript , IoLogoCss3} from 'react-icons/io';
import { BiLogoMongodb , BiLogoCss3} from 'react-icons/bi';
import {SiNextdotjs , SiPrisma} from 'react-icons/si';


const Tech = () => {


  return (
    <div className={styles.container} >
      <div className={styles.dropShad}></div>
        <div className={styles.iconContainer} >
            
            <div className={styles.iconBox}>
              <FaSass />
            </div>
            <div className={styles.iconBox}>
              <FaNode />
            </div>
             <div className={styles.iconBox}>
              <BiLogoCss3 />
              </div>
              
            
            <div className={styles.iconBox}>
              <SiPrisma />
            </div>
           
            <div className={styles.iconBox}>
              <SiNextdotjs />
            </div> 
            <div className={styles.iconBox}>
              <DiReact />
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
            
            
        </div>
    </div>
  )
}

export default Tech