import React from 'react'
import styles from './styles.module.css'

//components 
import Title from './title/title'
import Cards from './cards/crads'
const Futures = () => {


    const texts = [ 
        {
  
            title:'Individuelles Design',
            text: 'Wir konzentrieren uns darauf, visuell ansprechende und intuitive Benutzeroberflächen zu erstellen, die Ihr Publikum von dem Moment an fesseln, in dem es auf Ihre Website gelangt.' ,
            text2: ' Durch die Kombination aktueller Design-Trends mit den Bedürfnissen Ihrer Benutzer entwickeln wir einzigartige und konkurrenzfähige UI & UX-Designs, die Sie von Ihren Mitbewerbern abheben lassen.',
            id : '1'
         },
         {
   
            title:'Optimierte Website für alle Geräte',
            text: 'Wir gewährleisten, dass Ihre Website auf allen Geräten, von Desktops bis hin zu Mobilgeräten eine außergewöhnliche Benutzererfahrung bietet.',
             text2: 'Unsere mobilfähigen, responsiven Designs passen sich automatisch an verschiedene Bildschirmgrößen und Auflösungen an und bieten ein konsistentes und ansprechendes Erlebnis für jeden Benutzer.' ,
            id : '2'
         },
       /*   {
            title: 'Attraktive Website für Top-Talente',
            text: 'Wir machen Ihr Unternehmen zu einem Magneten für Top-Talente. Mit einer ansprechenden Website und einem unkomplizierten Bewerbungsprozess überzeugen wir Bewerber von Ihren Stärken als Arbeitgeber.' ,
            text2: ' So gewinnen Sie die besten Mitarbeiter für Ihr Unternehmen.',
            id : '3'
         }, */
         {
            title:'Mehr Sichtbarkeit',
            text: 'Das Erstellen einer ästhetisch ansprechenden und funktionalen Website ist wichtig, aber ebenso wichtig ist es sicherzustellen, dass Ihre Zielgruppe sie leicht findet. ' ,
            text2: 'Unsere SEO-Dienstleistungen zielen darauf ab, die Suchmaschinensichtbarkeit und den organischen Traffic Ihrer Website zu verbessern.',
            id : '4'
         },
    ]

  return (
    <div className={`${styles.container}`}>
          
           <div className={styles.innerContainer} >

                  <div className={styles.textsContainer}>

               {texts.map((text)=> (
                <Title key={text.id} text={text.text} id ={text.id} title={text.title} text2={text.text2}/>
               ))}
               
             
                  </div>

                  <div className={styles.illustrationsContainer }>

                       <div className={styles.illustrationContainer}>
                       <Cards />
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Futures