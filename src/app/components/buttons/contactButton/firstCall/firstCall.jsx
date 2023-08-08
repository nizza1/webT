'use client'


import React from 'react'
import styles from './styles.module.css'
import { BsFillCalendarCheckFill } from "react-icons/bs"
import {LuArrowRight} from "react-icons/lu"
const FirstCall = ({text}) => {
  return (
    <button className={styles.contactButton}>{text} 
 
    <span className={styles.span}>
        <BsFillCalendarCheckFill className={styles.icon}/></span>
   </button>
  )
}

export default FirstCall