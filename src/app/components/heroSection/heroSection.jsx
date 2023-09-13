import React from 'react'
import Image from 'next/image'
//styles 
import styles from './styles.module.css'
import ContactButton from '@app/components/buttons/contactButton/firstCall/firstCall'
import Highlight from '../title-gr/title-highlight/highlight'

import {PiArrowDownThin} from "react-icons/pi"



const HeroSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.blurLayer}></div>
        <div className={styles.background}>
       
        </div>

        <div className={styles.textContainer}>

        <h1 className={styles.titleGr}>
        Ich entwickle anspruchsvolle <Highlight text='Websites'/>
        </h1>
        <p className={styles.text}>Ich helfe Unternehmen und Dienstleistern dabei, einzigartige, moderne und suchmaschinenoptimierte Website zu erstellen.</p>
        <ContactButton text='BERATUNG VEREINBAREN'/>

        <div className={styles.scroll}>
        <PiArrowDownThin className={styles.scrollArrow}/>
        </div>

        </div>
       
    </div>
  )
}

export default HeroSection