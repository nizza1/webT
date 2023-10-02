import React from 'react'
import styles from './styles.module.css'
import classNames from 'classnames'

//components 
import Social from '@app/components/social/social'

const Footer = () => {
  return (
    <div className={classNames(styles.container )}> 
    <div className={classNames('')}>
    <Social />
    </div>
    <div className={styles.rights}>
      <a href="#">Impressum</a>
      <a href="#">Datenschutzerklärung</a>
    </div>

    <div className={styles.nuance}>
      <h2>NUANCESTUDIO</h2>
    </div>
    
    </div>
  )
}

export default Footer