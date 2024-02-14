import React from 'react'

import Image from 'next/image'
//components 
import Title from '@app/components/title-gr/title-highlight-d-bg/highlight'

//styles 
import styles from './styles.module.css'


import chrisImage from 'public/Chris min.jpeg'
import nizarImage from 'public/Nizar-min.jpeg'
import dashaImage from 'public/Sofia min.jpeg'
import alexImage from 'public/Alex min.jpeg'

import Overlay from '../globalComponents/overlay/overlay'

const About = () => {
  return (
    <div className={styles.container} id='aboutus'>


      <Overlay />
      <div className={styles.overlay}></div>

       <div className={styles.innerContainer}>
       
       <div className={styles.imgTextContainer}>
      
        <div className={styles.textContainer}>
        <div className={styles.titleAbout}>
        <h1><Title text='Wer sind wir?'/></h1>
        </div>

        <div className={styles.aboutTextContainer}>
            <p className={styles.aboutText}>
             In der Welt des digitalen Designs und der Webentwicklung steht Nuancestudio für Qualität, Innovation und maßgeschneiderte Lösungen. <br /> Unser Team bringt eine vielfältige Palette an Fähigkeiten und Fachwissen zusammen, um Projekte zu realisieren, die nicht nur beeindrucken, sondern auch funktionale Exzellenz bieten.
            </p>

          {/*    <h2 className={styles.titleB}>Wir haben das Know-how. <br />Sie haben die Ziele.</h2> */}
             <p><Title text='Wir haben das Know-how.'/>
             <br /><Title text='Sie haben die Ziele.'/></p>
            


        </div>

    
        </div>

        <div className={styles.imagesContAll}>
           <div className={styles.allImages}>

<div className={styles.singleAbout}>
 
 <div className={styles.imgContainer}>
   <Image
   className={styles.img}
   src={nizarImage}
   fill={true}
   placeholder='blur'
   alt='Nizar Djassim'
   style={{
     objectFit: 'cover',
   }}
   />
 </div>
 <div className={styles.underImage}>
 <div className={styles.uberMichText}>
  <p className={styles.imgTitle}>Nizar  </p>
  <p className={styles.imgDes}>
    <span>Webentwickler</span> <br /> Ich sorge dafür, dass Ihre digitale Präsenz nicht nur optisch ansprechend, sondern auch technisch einwandfrei ist.</p>

  </div>
 </div>

</div>

<div className={styles.singleAbout}>
 <div className={styles.imgContainer}>
   <Image
   className={styles.img}
   src={chrisImage}
 /*   width={400}
   height={500} */
   placeholder='blur'
   fill={true}
   alt='chris Bohdan'
   style={{
     objectFit: 'cover',
   }}
   />
 </div>
 <div className={styles.underImage}>
  <div className={styles.uberMichText}>
  <p className={styles.imgTitle}>Christian  </p>
  <p className={styles.imgDes}> <span>Marketing und Kundensupport</span> <br />Ich bin Ihr erster Ansprechpartner und sorge dafür, dass Ihre Bedürfnisse verstanden und erfüllt werden.</p>

  </div>


 </div>
 

</div>


           </div>

            <div className={styles.allImages}>
<div className={styles.singleAbout}>
 <div className={styles.imgContainer}>
   <Image
   className={styles.img}
   src={dashaImage}
 /*   width={400}
   height={500} */
   placeholder='blur'
   fill={true}
   alt='Sofia'
   style={{
     objectFit: 'cover',
   }}
   />
 </div>
 <div className={styles.underImage}>
 <div className={styles.uberMichText}>
  <p className={styles.imgTitle}>Sofia  </p>
  <p className={styles.imgDes}>
    <span>Grafik und Webdesign</span><br />
    Unsere kreative Kraft im Grafikdesign.<br /> Sofia bringt Ideen zum Leben und sorgt dafür, dass jedes Projekt visuell heraussticht.</p>

  </div>
 </div>
 

</div>

<div className={styles.singleAbout}>
 <div className={styles.imgContainer}>
   <Image
   className={styles.img}
   src={alexImage}
 /*   width={400}
   height={500} */
   placeholder='blur'
   fill={true}
   alt='Sofia'
   style={{
     objectFit: 'cover',
   }}
   />
 </div>
 <div className={styles.underImage}>
 <div className={styles.uberMichText}>
  <p className={styles.imgTitle}>Alex  </p>
  <p className={styles.imgDes}>
    <span>Copywriter</span><br />
    
    Ich verleihe Ihren Ideen überzeugende Worte. Meine Mission ist es, Ihre Botschaft prägnant und wirkungsvoll zu formulieren.</p>

  </div>
 </div>
 

</div>

           </div>
          
        </div>


       </div>

       </div>
    </div>
  )
}

export default About