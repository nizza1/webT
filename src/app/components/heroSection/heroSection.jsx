import React from 'react'
import Image from 'next/image'
//styles 
import styles from './styles.module.css'
import ContactButton from '@app/components/buttons/contactButton/firstCall/firstCall'
import Highlight from '../title-gr/title-highlight/highlight'
import Map from '@app/components/mapAnimation/map'
import Scroll from './scroll/scrollNext'


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
        <ContactButton text='KOSTENLOSES ERSTGESPRÄCH' position='hero' time='ca.15 Minuten'/>

        <Scroll to='#nextS'/>

        </div>
       
    </div>
  )
}

export default HeroSection