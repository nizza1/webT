import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'


const blur = '/bg/blur11.svg'


const Bg = () => {
  return (
    <div className={styles.bg}>
      <Image 
      className={styles.img}
      src={blur}
      fill={true}
      alt='bg'/>

    </div>
  )
}

export default Bg