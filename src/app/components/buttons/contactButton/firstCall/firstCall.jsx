'use client'


import React from 'react'
import styles from './styles.module.css'
import {BsArrowRightCircle} from "react-icons/bs"
import {LuArrowRight} from "react-icons/lu"
const FirstCall = ({text}) => {
  return (
    <button className={styles.contactButton}>{text} 
 
    <span className={styles.span}>
        <LuArrowRight className={styles.icon}/></span>
   </button>
  )
}

export default FirstCall