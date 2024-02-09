import React from 'react'
import Image from 'next/image'
//styles 
import styles from './styles.module.css'
/* import ContactButton from '@app/components/buttons/contactButton/firstCall/firstCall' */
import Highlight from '../title-gr/title-highlight/highlight'
import Map from '@app/components/mapAnimation/map'
import Scroll from './scroll/scrollNext'
import Link from 'next/link'

import { FiArrowRight } from "react-icons/fi";



const HeroSection = () => {



  return (
    <div className={styles.container}>
        
        <div className={styles.backgroundAnim}>
          <Map />
        </div>

        <div className={styles.textContainer}>

        <h1 className={styles.titleGr}>
        Maßgeschneiderte <Highlight text='Webseiten'/> für den Mittelstand 
        </h1>
        {/* <p className={styles.text}>
          Mit einer professionellen Website die Sichtbarkeit erhöhen, Bewerber und neue Kunden gewinnen.</p> */}
          <p className={styles.text}>
          Für mehr Kunden und passende Fachkräfte</p>
          
        <Link className={styles.link} href='/contact'>ERSTGESPRÄCH VEREINBAREN 
     
        <FiArrowRight className={styles.coIcon} />
     
       
        </Link>
       

        <Scroll to='#nextS'/>

        </div>
       
    </div>
  )
}

export default HeroSection