
import React from 'react'
import styles from './styles.module.css'



//components 
import Title from '@app/components/title-gr/title-gr'
const Phases = () => {

  return (
    <div className={styles.outContainer}>
        <Title text='Der Ablauf in 4 Schritten'/>

        <div className={styles.phasesContainer}>

         

          <div className={styles.phase}
            >

           <div className={styles.circle}>
                   <p># 1</p>
            </div>
        
            <div className={styles.content}>
                <h2>Anforderungsanalyse und Erstgespräch</h2>

                <p>Wir starten den Prozess mit einem ausführlichen Gespräch, um das genaue Anforderungsprofil Ihres Projekts zu verstehen.</p>

                <p> In diesem ersten Schritt klären wir Ihre Ziele, Zielgruppen und Designvorlieben.</p>
            </div>
          </div>
           
          <div className={styles.phase}
            >

           <div className={styles.circle}>
                   <p># 2</p>
            </div>
        
            <div className={styles.content}>
                <h2>Design & Entwicklung</h2>

                <p>Nachdem wir Ihre Anforderungen verstanden haben, beginnen wir mit der Gestaltung und Entwicklung Ihrer Website.</p>
                <p>Während dieses Prozesses halten wir Sie regelmäßig auf dem Laufenden und sammeln Ihr Feedback, um sicherzustellen, dass wir Ihre Erwartungen erfüllen.
                </p>
            </div>
          </div>

          <div className={styles.phase}
            >

           <div className={styles.circle}>
                   <p># 3</p>
            </div>
        
            <div className={styles.content}>
                <h2>Zwischenüberprüfung</h2>

                <p>Nach Abschluss der Hauptentwicklungsphase präsentieren wir Ihnen das Zwischenergebnis Ihrer Website.</p>

                <p>Wir sind offen für Anpassungen und Verbesserungsvorschläge, um sicherzustellen, dass das Endprodukt genau Ihren Wünschen entspricht.</p>
            </div>
          </div>

          <div className={styles.phase}
            >

           <div className={styles.circle}>
                   <p># 4</p>
            </div>
        
            <div className={styles.content}>
                <h2>Bereitstellung</h2>

                <p>Nach erfolgreicher Überprüfung und Implementierung Ihrer Anpassungen sind wir bereit, Ihre Website live zu schalten.
                </p>

                <p>
                Wir kümmern uns um den technischen Aspekt der Bereitstellung und stellen sicher, dass alles reibungslos funktioniert.
                </p>

            </div>
          </div>
            
      

  


        </div>
    </div>
  )
}

export default Phases
