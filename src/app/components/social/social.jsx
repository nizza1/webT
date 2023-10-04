import React from 'react'
import styles from './styles.module.css'

import {TiSocialLinkedin} from "react-icons/ti"
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
     <a href='https://github.com/nizza1'
     target="_blank"
     className={styles.singlerIcon}>
     <BsGithub />
     </a>
    {/*  <a href='https://www.instagram.com/nizar_z0/'
     target="_blank"
     className={styles.singlerIcon}>
     <BiLogoInstagram />
     </a> */}
    </div>
  )
}

export default Social