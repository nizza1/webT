import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
const img = '/illustrations/Mailbox-bro.svg'

const Contactill = () => {


  return (


    <Image
            className={styles.img}
            src={img}
            alt="contact-form-image"
            fill={true}

        />
  
        

  )
}

export default Contactill