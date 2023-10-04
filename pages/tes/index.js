

import React from 'react'
// test components 
import Tes from '@app/components/tes/tes'
import styles from './styles.module.css'
import Sliderr from '@app/components/newSlider/sliderr'
const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Sliderr />        
      </div>
    </div>
  )
}

export default index