'use client'


import React from 'react'
import styles from './styles.module.css'
import {BsSend} from "react-icons/bs"

const ContactButton = ({text}) => {

  return (
    <button className={styles.contactButton}>{text} 
    <span className={styles.spot}></span>
    <span className={styles.span}>
        <BsSend className={styles.icon}/></span>
   </button>
  )
}

export default ContactButton