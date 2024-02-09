import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import Chris from 'public/chrisEd (1)-min.png'

const ImgCo = () => {
  return (
    <div className={styles.imgContainer}>
        <div className={styles.imgBorder}/>
    <Image
    className={styles.img}
    src={Chris}
    fill={true}
    placeholder='blur'
    alt='Nizar Djassim'
    sizes="(max-width: 768px) 600px, (max-width: 1200px) 50vw, 33vw"
    style={{
      objectFit: 'cover',
    }}
    />
  </div>  )
}

export default ImgCo