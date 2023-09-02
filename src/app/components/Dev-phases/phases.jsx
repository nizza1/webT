
import React,{useRef} from 'react'
import styles from './styles.module.css'



//components 
import Title from '@app/components/title-gr/title-gr'
const phases = () => {



  return (
    <div className={styles.outContainer}>
        <Title text='Entwicklungsphasen'/>

        <div className={styles.phasesContainer}>
            <div
            className={styles.phase}
            >
            <div className={styles.timeline}>
                <div className={styles.circle}>
                    <h2># 1</h2>
                </div>
                <div className={styles.line}>
                    <div></div>
                </div>
            </div>
            <div className={styles.content}></div>
            
          </div>
        </div>
    </div>
  )
}

export default phases
