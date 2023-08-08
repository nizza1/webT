import React from 'react'
import styles from './styles.module.css'

//components 
import Title from './title/title'
import Cards from './cards/crads'
const Futures = () => {

    const texts = [ 
        {
            title:' UI & UX-Design',
            text: 'Wir konzentrieren uns darauf, visuell ansprechende und intuitive Benutzeroberflächen zu erstellen, die Ihr Publikum von dem Moment an fesseln, in dem es auf Ihre Website gelangt.' ,
            text2: ' Durch die Kombination aktueller Design-Trends mit den Bedürfnissen Ihrer Benutzer entwickeln wir einzigartige und konkurrenzfähige UI & UX-Designs, die Sie von Ihren Mitbewerbern abheben lassen.',
            id : '1'
         },
   /*       {
            title: 'Nahtlose Benutzererfahrung',
            text: 'Die Benutzererfahrung steht im Mittelpunkt unseres Webentwicklungsprozesses. Wir legen Wert darauf, nahtlose und benutzerfreundliche Erlebnisse für Ihre Besucher zu schaffen. Unser Team taucht tief in das Verhalten und die Vorlieben Ihrer Benutzer ein, was es uns ermöglicht, Oberflächen zu gestalten, die Ihren Kundenservice- und Marketingzielen entsprechen. Mit mehreren Runden echter Benutzertests und der Zusammenarbeit mit Stakeholdern optimieren wir Ihre Website-UX für bessere Conversion-Raten, erhöhte Benutzerinteraktion und gesteigerte Kundenbindung.' ,
            id : '2'
         }, */
         {
            title:'Responsive auf allen Geräten',
            text: 'Wir gewährleisten, dass Ihre Website auf allen Geräten, von Desktops bis hin zu Mobilgeräten eine außergewöhnliche Benutzererfahrung bietet.',
             text2: 'Unsere mobilfähigen, responsiven Designs passen sich automatisch an verschiedene Bildschirmgrößen und Auflösungen an und bieten ein konsistentes und ansprechendes Erlebnis für jeden Benutzer.' ,
            id : '2'
         },
         {
            title: 'Schnelle Ladezeiten',
            text: 'Unsere Entwicklungsexpertise konzentriert sich darauf, Websites zu erstellen, die schnell laden, um die Wartezeit der Benutzer zu minimieren und die Absprungraten zu reduzieren.' ,
            text2: ' Wir optimieren die Leistung der Website, komprimieren Bilder und implementieren Caching-Techniken, um sicherzustellen, dass Ihre Besucher ein nahtloses und zufriedenstellendes Browsing-Erlebnis haben.',
            id : '3'
         },
         {
            title:'Verbesserte Sichtbarkeit',
            text: 'Das Erstellen einer ästhetisch ansprechenden und funktionalen Website ist wichtig, aber ebenso wichtig ist es sicherzustellen, dass Ihre Zielgruppe sie leicht findet. ' ,
            text2: 'Unsere SEO-Dienstleistungen zielen darauf ab, die Suchmaschinensichtbarkeit und den organischen Traffic Ihrer Website zu verbessern.',
            id : '4'
         },
    ]

  return (
    <div className={`${styles.container}`}>
          
           <div className={styles.innerContainer}>

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