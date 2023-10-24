"use client"

import React from 'react'
import {PiArrowDownThin} from "react-icons/pi"
import styles from './styles.module.css'

const scrollNext = ({to}) => {

    const handleScroll = (href) => {
        // Prevent the default behavior of the anchor tag
        if (href) {
          const targetId = href.replace(/.*\#/, "");
    
          // Get the element by id and use scrollIntoView with smooth behavior
          const elem = document.getElementById(targetId);
          elem?.scrollIntoView({
            behavior: "smooth",
          });
        }
      };


  return (
    <button className={styles.scroll} onClick={()=>{
        handleScroll(to)
    }}>
        <PiArrowDownThin className={styles.scrollArrow}/>
    </button>
  )
}

export default scrollNext