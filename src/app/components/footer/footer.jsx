import React from 'react'
import styles from './styles.module.css'
import classNames from 'classnames'
import Link from 'next/link'

//components 
import Social from '@app/components/social/social'

import Highlight from '../title-gr/title-highlight/highlight'


import {FiPhoneCall} from 'react-icons/fi'
import {MdAlternateEmail} from 'react-icons/md'
import {BsFillPinMapFill} from 'react-icons/bs'

import { IoIosLink } from "react-icons/io";



const Footer = () => {
  return (
    <div className={classNames(styles.container )}> 
    <div className={styles.socialImpressum}>
    <div >
    <Social />
    </div>


    <div className={styles.contactData}>
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
    <div className={styles.rights}>

      <div>
      <IoIosLink className={styles.icons}/>
      <Link href="/impressum">Impressum & Datenschutzerklärung</Link>
      </div>
    
      <div>
      <IoIosLink className={styles.icons}/>
      <Link href="/agb">AGB</Link>
      </div>
     
      
    </div>
    </div>
    

    <div className={styles.nuance}>
      <div className={styles.inNuance}>
      <h2><Highlight text='NUANCESTUDIO'/></h2>
      </div>
      
    </div>
    
    </div>
  )
}

export default Footer