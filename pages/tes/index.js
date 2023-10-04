

import React from 'react'
// test components 
import Tes from '@app/components/tes/tes'
import styles from './styles.module.css'
const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.slider}>
          <div className={styles.elem}>
            <h2>1</h2>
          </div>

          <div className={styles.elem}>
            <h2>2</h2>
          </div>

          <div className={styles.elem}>
            <h2>3</h2>
          </div>

          <div className={styles.elem}>
            <h2>4</h2>
          </div>
          <div className={styles.elem}>
            <h2>5</h2>
          </div>

          <div className={styles.elem}>
            <h2>6</h2>
          </div>

          <div className={styles.elem}>
            <h2>7</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index