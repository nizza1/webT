'use client'

import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'

/* import { IoIosCode } from "react-icons/io"; */
import { TbCode } from "react-icons/tb";


//componentes 
import ContactButton from '@app/components/buttons/contactButton/contactButton'


const HeaderBar = () => {
  return (
    <section className={classNames(styles.container)}>
        <div className={classNames(styles.logButContainer, 'inContainer')}>
            <ContactButton text='kontakt'/>
            <TbCode className={styles.logo}/>
        </div>
        </section>
  )
}

export default HeaderBar