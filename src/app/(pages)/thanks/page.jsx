import React from 'react'
import styles from './styles.module.css'

import Title from '@app/components/title-gr/title-gr'

import Image from 'next/image'

const imgThank = '/thank-you-page.svg'

const Thanks = () => {
  return (
    <main className={styles.main}>
        <div className={styles.titleCo}>
        <Title text='Vielen Dank! Wir melden uns zeitnah bei Ihnen.' />
        </div>
     

        <div className={styles.imgCo}>
            <Image
            className={styles.img}
            src={imgThank}
            fill={true}
            />
        </div>
    </main>
  )
}

export default Thanks