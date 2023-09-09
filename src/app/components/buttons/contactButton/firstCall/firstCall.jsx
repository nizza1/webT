'use client'


import React from 'react'
import styles from './styles.module.css'
import { BsFillCalendarCheckFill } from "react-icons/bs"

//zustand 
import useModalStore from '@app/stores/offerStore'

import {LuArrowRight} from "react-icons/lu"
const FirstCall = ({text}) => {
  const { isModalOpen, toggleModal } = useModalStore();

  return (
    <button
    onClick={toggleModal}
     className={styles.contactButton}>{text} 
 
    <span className={styles.span}>
        <BsFillCalendarCheckFill className={styles.icon}/></span>
   </button>
  )
}

export default FirstCall