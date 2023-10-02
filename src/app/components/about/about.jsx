import React from 'react'

import Image from 'next/image'
//components 
import Title from '@app/components/title-gr/title-gr'

//styles 
import styles from './styles.module.css'
import { SiSocialblade } from 'react-icons/si'
import Social from '../social/social'

const chrisImage = '/chrisBohdan.jpeg'
const nizarImage = '/images/pMe.jpg'
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

             <h2>Wir haben das Know-how. Sie haben die Ziele.</h2>

        </div>

        <div className={styles.singleAbout}>
         
          <div className={styles.lineF}></div>

          <div className={styles.textContainerS}>
            
            <h2>Nizar Djasssim</h2>
            <p>Als IT-Spezialist mit 8 Jahren Erfahrung bin ich Ihr Ansprechpartner für die technische Betreuung Ihrer Website. Ich sorge dafür, dass Ihre Website immer auf dem neuesten Stand und technisch einwandfrei ist. So können Sie sich darauf verlassen, dass Ihre Website für Ihre Kunden immer optimal funktioniert.</p>
          </div>

          <div className={styles.imgContainer}>
            <Image
            className={styles.img}
            src={nizarImage}
            width={400}
            height={400}
            alt='Nizar Djassim'
            style={{
              objectFit: 'cover',
            }}
            />
          </div>
        </div>


        <div className={styles.singleAbout}>
          <div className={styles.imgContainer}>
            <Image
            className={styles.img}
            src={chrisImage}
            width={400}
            height={400}
            alt='chris Bohdan'
            style={{
              objectFit: 'cover',
            }}
            />
          </div>
          <div className={styles.textContainerS}>
            <h2>Christian Bohdan</h2>
            <p>Als Gründer von Nuance Studio bin ich verantwortlich für das visuelle und marketingtechnische Auftreten Ihrer Website. Ich führe ein Team aus Designern, Entwicklern und Textern, die gemeinsam mit Ihnen Ihre Website zu einem einzigartigen und zeitgemäßen Erlebnis machen.</p>
          </div>

          <div className={styles.lineS}></div>
        </div>


    
        </div>
       </div>
       </div>
    </div>
  )
}

export default About