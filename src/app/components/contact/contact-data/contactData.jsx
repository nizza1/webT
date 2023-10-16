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
            <p >Schnieglinger Str. 264, Nürnberg</p>
        </div>

        <div>
            <FiPhoneCall className={styles.icons} />
            <a href="tel:+4991137433917">+49 911 37433917</a>
        </div>

        <div>
            <MdAlternateEmail className={styles.icons}/>
            <a href = "mailto: info@nuancestudio.de">info@nuancestudio.de
            </a>
        </div>

    </div>
  )
}

export default ContactData