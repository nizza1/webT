import React from 'react'
import Img from './imgComp/imgCo'
import Form from './contactForm/form'
import styles from './styles.module.css'


const Contactsec = () => {
  return (
    <div className={styles.co} id='contact-section'>
     
        <div className={styles.inCo}>
            <div className={styles.imgCoOut}>

                <div className={styles.imgCard}>
                    <p>
                        Ihr Ansprechpartner
                    </p>
                    <h2>Christian Bohdan</h2>
                    <Form />
                </div>
              <div className={styles.imgCo}>
               <Img />
              </div>
            </div>


       
        </div>
    </div>
  )
}

export default Contactsec