import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

const svg = '/grid.svg'
const grid = '/gridll.svg'
const Overlay = () => {
  return (
    <>

      <div className={styles.overlay}>
  {/*        <Image 
         className={styles.svg}
         src={grid}
         fill={true}
         style={{
            objectFit: 'cover'
         }}
         alt='grid layout'
         /> */}
        </div>
    </>
   
  )
}

export default Overlay