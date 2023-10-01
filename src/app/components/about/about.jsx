import React from 'react'

import Image from 'next/image'
//components 
import Title from '@app/components/title-gr/title-gr'

//styles 
import styles from './styles.module.css'
import { SiSocialblade } from 'react-icons/si'
import Social from '../social/social'
const About = () => {
  return (
    <div className={styles.container}>
       <div className={styles.innerContainer}>
       
       

       <div className={styles.imgTextContainer}>
      
        <div className={styles.textContainer}>
        <div className={styles.titleAbout}>
        <Title text='Die Gründer von Nuance Studio'/>
        </div>

        <div className={styles.aboutTextContainer}>
            <h2 className={styles.aboutText}>Als Unternehmer sind Sie ein Experte in Ihrer Branche. Sie haben langjährige Erfahrung und ein tiefes Verständnis für Ihre Kunden und Ihre Bedürfnisse. <br />
             Doch auch im Marketing können Sie erfolgreich sein. <br /><br />Mit einer professionellen Website können Sie Ihre Sichtbarkeit erhöhen, neue Kunden gewinnen und Ihr Unternehmen voranbringen.<br />
             </h2>

             <h2 className={styles.aboutText}>
             Lassen Sie uns zusammen Ihre Ideen verwirklichen und eine Online-Präsenz für Ihr Unternehmen schaffen.
             </h2>
        </div>

        <div>
           <Social />
        </div>
    
        </div>
       </div>
       </div>
    </div>
  )
}

export default About