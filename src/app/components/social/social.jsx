import React from 'react'
import styles from './styles.module.css'

import {TiSocialLinkedin} from "react-icons/Ti"
import {BsGithub } from "react-icons/bs"
import {BiLogoInstagram } from "react-icons/Bi"


const social = () => {
  return (
    <div className={styles.container}>
        
     <span className={styles.singlerIcon}>
     <TiSocialLinkedin />
     </span>
     <span className={styles.singlerIcon}>
     <BsGithub />
     </span>
     <span className={styles.singlerIcon}>
     <BiLogoInstagram />
     </span>
    </div>
  )
}

export default social