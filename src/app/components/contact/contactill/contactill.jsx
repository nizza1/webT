import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
const img = '/up-Chris.jpg'

const Contactill = () => {


  return (

<>
    <Image
            className={styles.img}
            src={img}
            alt="contact-form-image"
            fill={true}

        />
  
  <div className={styles.nameCo}>
    <h2>Christian Bohdan</h2>
    <p>Ihr Ansprechpartner</p>
  </div>
  </>

  )
}

export default Contactill