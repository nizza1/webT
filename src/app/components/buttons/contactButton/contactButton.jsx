'use client'


import React , {useState} from 'react'
import styles from './styles.module.css'
import {BsSend} from "react-icons/bs"

//components 
import Offer from '@app/components/offerModal/offer'
import Contact from '@app/components/contact/contact'

const ContactButton = ({text , funn}) => {

  const {render , setRender} = useState(true)

 /*  const handleButtonClick = () => {
    if (funn) {
      funn(); // Call the provided function to open the modal
    }
  }; */

  return (
    <>
       <button className={styles.contactButton}
      /*  onClick={handleButtonClick} */
          >{text} 
          <span className={styles.spot}></span>
          <span className={styles.span}>
              <BsSend className={styles.icon}/></span>
        </button>
    </>

  )
}

export default ContactButton