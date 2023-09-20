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
        <div className={styles.imgContainer}>
               <Image
               className={styles.img}
               src="/images/pMe.jpg"
               width={400}
               height={400}
              /*  width={600}
               height={700} */
               alt="Picture of portfolio"
               />
        </div>


        <div className={styles.textContainer}>
        <div className={styles.titleAbout}>
        <Title text='Wer bin ich '/>
        </div>

        <div className={styles.aboutTextContainer}>
            <h2 className={styles.aboutText}>Hallo! Ich bin Nizar, ein Webentwickler aus Nürnberg. <br />
             Mein Leidenschaft ist es, beeindruckende Websites für Unternehmen und Dienstleister zu erstellen.
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