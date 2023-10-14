import React from 'react'
import Image from 'next/image'
//styles 
import styles from './styles.module.css'
import ContactButton from '@app/components/buttons/contactButton/firstCall/firstCall'
import Highlight from '../title-gr/title-highlight/highlight'
import Map from '@app/components/mapAnimation/map'

import {PiArrowDownThin} from "react-icons/pi"



const HeroSection = () => {
  return (
    <div className={styles.container}>
        
        <div className={styles.backgroundAnim}>
          <Map />
        </div>

        <div className={styles.textContainer}>

        <h1 className={styles.titleGr}>
        Wir entwickeln verkaufsstarke <Highlight text='Websites'/>
        </h1>
        <p className={styles.text}>
          Mit einer professionellen Website die Sichtbarkeit erhöhen, Bewerber und neue Kunden gewinnen.</p>
        <ContactButton text='BERATUNG VEREINBAREN' position='hero'/>

        <div className={styles.scroll}>
        <PiArrowDownThin className={styles.scrollArrow}/>
        </div>

        </div>
       
    </div>
  )
}

export default HeroSection