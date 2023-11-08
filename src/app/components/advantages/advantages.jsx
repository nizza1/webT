import React from 'react'
import styles from './styles.module.css'

import {BsCheckCircle} from 'react-icons/bs'
//components
import Title from '../title-gr/title-gr'
 const Advantages = () => {
  return (
    <div className={styles.outContainer}>
        <div className={styles.innerContainer} id='nextS'>
            
            <div className={styles.listContainer}>
            <div className={styles.titleContainer}>
                <Title text='Ihre Vorteile' />
            </div>
                <ul>
                 <div className={styles.listAndIcon}>
                    <BsCheckCircle
                    className={styles.icon}/>

                    <li>
                      <h3>Ein Ansprechpartner für alle Ihre Fragen</h3>
                      <p> Wir stellen Ihnen einen persönlichen Ansprechpartner zur Verfügung, der Ihr Projekt von Anfang bis Ende begleitet.</p>
                      </li>
                 </div>

                 <div className={styles.listAndIcon}>
                    <BsCheckCircle
                    className={styles.icon}/>

                    <li>
                    <h3>Einfache und schnelle Kommunikation</h3>
                    <p>Unsere Online-Lösungen ermöglichen Ihnen eine zeit- und ortsunabhängige Zusammenarbeit. </p>
                    </li>
                 </div>

                 <div className={styles.listAndIcon}>
                    <BsCheckCircle
                    className={styles.icon}/>

                    <li>
                    <h3>Transparente Kosten</h3>
                    <p> Wir haben keine versteckten Kosten. Alle unsere Preise sind transparent und werden im Voraus festgelegt.</p>
                    </li>
                 </div>

                 <div className={styles.listAndIcon}>
                    <BsCheckCircle
                    className={styles.icon}/>

                    
                    <li>
                    <h3>Kein Wartungsvertrag</h3>
                    <p>Wir bieten keinen Wartungsvertrag an, wenn Sie jedoch Unterstützung benötigen, sprechen Sie uns gerne an.</p>
                    </li>
                 </div>
                    

                  

                   

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Advantages
