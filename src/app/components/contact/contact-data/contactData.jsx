import React from 'react'
import {FiPhoneCall} from 'react-icons/fi'
import {MdAlternateEmail} from 'react-icons/md'

import styles from './styles.module.css'
const ContactData = () => {
  return (
    <div className={styles.container}>
        <div>
            <FiPhoneCall className={styles.icons} />
            <a href="tel:017684070282">+49 1768 4070 282</a>
        </div>

        <div>
            <MdAlternateEmail className={styles.icons}/>
            <a href = "mailto: nizardjassim@gmail.com">nizardjassim@gmail.com</a>
        </div>

    </div>
  )
}

export default ContactData