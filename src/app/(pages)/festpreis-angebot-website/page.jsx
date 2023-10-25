import React from 'react'
import styles from './styles.module.css'

import Angebot from '@app/components/globalComponents/preisAngebot/preisAngebot'

const PreisAngebot = () => {
  return (
    <div className={styles.outContainer}>
      <div className={styles.innerContainer}>
     {/*  <h1>Erhalten Sie ein maßgeschneidertes Angebot für Ihre Webseite</h1> */}

      <div className={styles.content}>
        <Angebot />
      </div>
      </div>
      
    </div>
  )
}

export default PreisAngebot