'use client'


import React ,{useState} from 'react'
import styles from './styles.module.css'
import { BsFillCalendarCheckFill } from "react-icons/bs"


import Offer from '@app/components/offerModal/offer'
//zustand 
import useModalStore from '@app/stores/offerStore'
import Tech from '@app/components/techstack/tech'
import { InlineWidget } from "react-calendly";

import {LuArrowRight} from "react-icons/lu"
const FirstCall = ({text}) => {
  /* const [modalContent, setModalContent] = useState(<Tech/>); */
  const modalContent = <Tech/> ? <Tech/> : null;
  const { isModalOpen, toggleModal } = useModalStore();


  const handleButtonClick = () => {
    // Set the desired content for the modal
    // Open the modal
    toggleModal();
  };


  return (
    <>
       <button
       onClick={handleButtonClick}
       className={styles.contactButton}>{text} 
 
        <span className={styles.span}>
        <BsFillCalendarCheckFill className={styles.icon}/></span>
       </button>

       <Offer>
       <InlineWidget
       className={styles.widget}
        url="https://calendly.com/nizardjassim/30min" />
       </Offer>

       
    </>
  )
}

export default FirstCall