import React from 'react'

import Image from 'next/image'
//components 
import Title from '@app/components/title-gr/title-gr'

//styles 
import styles from './styles.module.css'


const chrisImage = '/chrisBohdan.jpeg'
const nizarImage = '/images/pMe.jpg'
const About = () => {
  return (
    <div className={styles.container} id='aboutus'>
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

             <h2 className={styles.titleB}>Wir haben das Know-how. <br />Sie haben die Ziele.</h2>

        </div>

        <div className={styles.singleAbout}>
         
          <div className={styles.lineF}></div>

          <div className={styles.textContainerS}>
            
            <h2>Nizar Djassim</h2>
            <p>Ich bin Ihr Ansprechpartner für die technische Betreuung Ihrer Website.<br></br><br></br> Ich sorge dafür, dass Ihre Website immer auf dem neuesten Stand und technisch einwandfrei ist. <br></br>So können Sie sich darauf verlassen, dass Ihre Website für Ihre Kunden immer optimal funktioniert.</p>
          </div>

          <div className={styles.imgContainer}>
            <Image
            className={styles.img}
            src={nizarImage}
            fill={true}
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
          /*   width={400}
            height={500} */
            fill={true}
            alt='chris Bohdan'
            style={{
              objectFit: 'cover',
            }}
            />
          </div>
          <div className={styles.textContainerS}>
            <h2>Christian Bohdan</h2>
            <p>Ich bin verantwortlich für das visuelle und marketingtechnische Auftreten Ihrer Website.<br></br><br></br>Ich führe ein Team aus Designern, Entwicklern und Textern, die gemeinsam mit Ihnen Ihre Website zu einem einzigartigen und zeitgemäßen Erlebnis machen.</p>
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