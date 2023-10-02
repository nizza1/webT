import React from 'react'
import {FiPhoneCall} from 'react-icons/fi'
import {MdAlternateEmail} from 'react-icons/md'
import {BsFillPinMapFill} from 'react-icons/bs'

import styles from './styles.module.css'
const ContactData = () => {
  return (
    <div className={styles.container}>
      <div>
            <BsFillPinMapFill className={styles.icons} />
            <p >Schnieglinger Str. 264, 90427 Nürnberg</p>
        </div>

        <div>
            <FiPhoneCall className={styles.icons} />
            <a href="tel:+49015770390746">+49 157 703 907 46</a>
        </div>

        <div>
            <MdAlternateEmail className={styles.icons}/>
            <a href = "mailto: c.bohdan@nuancestudio.de">c.bohdan@nuancestudio.de</a>
        </div>

    </div>
  )
}

export default ContactData