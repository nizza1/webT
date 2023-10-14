'use client'


import React  from 'react'
import styles from './styles.module.css'
import { track } from '@vercel/analytics/react'
 
import { BsFillCalendarCheckFill } from "react-icons/bs"


import Offer from '@app/components/offerModal/offer'
//zustand 
import useModalStore from '@app/stores/offerStore'
import Tech from '@app/components/techstack/tech'
import { InlineWidget } from "react-calendly";

import {LuArrowRight} from "react-icons/lu"
const FirstCall = ({text , position}) => {
  /* const [modalContent, setModalContent] = useState(<Tech/>); */
  const modalContent = <Tech/> ? <Tech/> : null;
  const { isModalOpen, toggleModal } = useModalStore();

  const trackScrollToContactSection = () => {
    track('sheduled ' + position);
  };
  const handleButtonClick = () => {
    trackScrollToContactSection();
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
       styles={{
        height:500,
      }}
      prefill={{
        hide_gdpr_banner: true, // Add this option to hide the GDPR banner
      }}

      pageSettings={{
        hideEventTypeDetails: true,
        hideLandingPageDetails: true,
      }}
        url="https://calendly.com/nizardjassim/30min" />
       </Offer>

       
    </>
  )
}

export default FirstCall