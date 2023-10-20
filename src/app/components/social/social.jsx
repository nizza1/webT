import React from 'react'
import styles from './styles.module.css'

import {TiSocialLinkedin} from "react-icons/ti"
import {BsWhatsapp} from 'react-icons/bs'
import {BsGithub } from "react-icons/bs"
import {BiLogoInstagram } from "react-icons/bi"


const Social = () => {
  return (
    <div className={styles.container}>
        
     <a href='https://www.linkedin.com/in/chrisbohdan/'
     target="_blank"
      className={styles.singlerIcon}>
     <TiSocialLinkedin />
     </a>
     {/* <a href='https://github.com/nizza1'
     target="_blank"
     className={styles.singlerIcon}>
     <BsGithub />
     </a> */}
     <a href='https://wa.me/+49015770390746/'
     target="_blank"
     className={styles.singlerIcon}>
     <BsWhatsapp />
     </a>
    </div>
  )
}

export default Social