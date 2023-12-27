import React from 'react'
import styles from './styles.module.css'
import classNames from 'classnames'
import Link from 'next/link'

//components 
import Social from '@app/components/social/social'

import Highlight from '../title-gr/title-highlight/highlight'

const Footer = () => {
  return (
    <div className={classNames(styles.container )}> 
    <div className={styles.socialImpressum}>
    <div >
    <Social />
    </div>
    <div className={styles.rights}>
      <Link href="/impressum">Impressum & Datenschutzerklärung</Link>
      
      <Link href="/agb">Allgemeine Geschäftsbedingungen</Link>
      
    </div>
    </div>
    

    <div className={styles.nuance}>
      <h2><Highlight text='NUANCESTUDIO'/></h2>
    </div>
    
    </div>
  )
}

export default Footer