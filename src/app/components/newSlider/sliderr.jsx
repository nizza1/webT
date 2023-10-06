import React , {useRef } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import {useScroll , useTransform , motion} from 'framer-motion'
const sliderr = () => {
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ["start end" , "end start"]
    })

    const x1 = useTransform(scrollYProgress , [0,1], [-450,450])

    const x2 = useTransform(scrollYProgress , [0,1], [350,-850])
    const y2 = useTransform(scrollYProgress , [0,1], [-250,250])
const refer1 = '/reference/rostockB-min.png'
const refer2 = '/reference/girafB-min.png'
const refer2S = '/reference/girafS-min.png'
const refer1S = '/reference/rostockS-min.png'
const refer5S = '/reference/comservS-min.png'
const refer6 = '/reference/conservB-min.png'
const refer7 = '/reference/horosB-min.png'
const refer7S = '/reference/horosS-min.png'
const refer8 = '/reference/imcB-min.png'
const refer8S = '/reference/imcS-min.png'
const refer10 = '/reference/quantumB-min.png'
const refer10S = '/reference/quantumS-min.png'

    
  return (
    <div className={styles.container} ref={container}>
        <motion.dev
        style={{x:x2 , y:y2}}
         className={styles.slider}>
               
             <div className={styles.elem}>
                <Image 
                className={styles.iMG}
                src={refer2}
                width={280}
                height={300}
                alt='reference'
                />
            </div>
            <div className={styles.elem}>
                <Image 
                className={styles.iMG}
                src={refer1}
                width={280}
                height={300}
                alt='reference'
                />
            </div>
            <div className={styles.elem}>
            <Image 
                className={styles.iMG}
                src={refer8}
                width={280}
                height={300}
                alt='reference'
                />
            </div>
            <div className={styles.elem}>
            <Image 
                className={styles.iMG}
                src={refer10}
                width={280}
                height={300}
                alt='reference'
                />
            </div>
            <div className={styles.elem}>
            <Image 
                className={styles.iMG}
                src={refer6}
                width={280}
                height={300}
                alt='reference'
                />
            </div>
            <div className={styles.elem}>
            <Image 
                className={styles.iMG}
                src={refer7}
                width={280}
                height={300}
                alt='reference'
                />
            </div>
            
           

        </motion.dev>
     
    </div>
  )
}

export default sliderr