import React from 'react'
import styles from './styles.module.css'

import {BsCheckCircle} from 'react-icons/bs'
//components
import Title from '../title-gr/title-gr'
 const Advantages = () => {
  return (
    <div className={styles.outContainer}>
        <div className={styles.innerContainer}>
            
            <div className={styles.listContainer}>
            <div className={styles.titleContainer}>
                <Title text='Ihre Vorteile' />
            </div>
                <ul>
                 <div className={styles.listAndIcon}>
                    <BsCheckCircle
                    className={styles.icon}/>

                    <li>
                      <h3>Individuelle Aufmerksamkeit:</h3>
                      <p> Ich widme Ihrem Projekt mehr Zeit und Aufmerksamkeit, da ich an weniger Projekten gleichzeitig arbeite.</p>
                      </li>
                 </div>

                 <div className={styles.listAndIcon}>
                    <BsCheckCircle
                    className={styles.icon}/>

                    <li>
                    <h3>Schnelle Kommunikation:</h3>
                    <p>Die Kommunikation mit mir als einzelnen Freelancer kann in der Regel schneller und direkter sein, da es weniger Ebenen in der Kommunikation gibt.</p>
                    </li>
                 </div>

                 <div className={styles.listAndIcon}>
                    <BsCheckCircle
                    className={styles.icon}/>

                    <li>
                    <h3>Kosteneffizienz:</h3>
                    <p> Als unabhängiger Freelancer biete ich eine kosteneffiziente Lösung im Vergleich zu Agenturen, da ich keine umfangreichen Overheads habe.</p>
                    </li>
                 </div>

                 <div className={styles.listAndIcon}>
                    <BsCheckCircle
                    className={styles.icon}/>

                    
                    <li>
                    <h3>Flexibilität:</h3>
                    <p>Schnelle Reaktion auf Änderungen und flexible Anpassung an neue Zeitpläne.</p>
                    </li>
                 </div>
                    

                  

                   

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Advantages
