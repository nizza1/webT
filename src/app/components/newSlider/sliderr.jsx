import React , {useRef } from 'react'
import styles from './styles.module.css'
import {useScroll , useTransform , motion} from 'framer-motion'
const sliderr = () => {
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ["start end" , "end start"]
    })

    const x1 = useTransform(scrollYProgress , [0,1], [-450,450])

    const x2 = useTransform(scrollYProgress , [0,1], [450,-450])




    
  return (
    <div className={styles.container} ref={container}>
        <motion.dev
        style={{x:x1}}
         className={styles.slider}>
            <div className={styles.elem}>
                <h1>1</h1>
            </div>
            <div className={styles.elem}>
                <h1>2</h1>
            </div>
            <div className={styles.elem}>
                <h1>3</h1>
            </div>
            <div className={styles.elem}>
                <h1>4</h1>
            </div>
            <div className={styles.elem}>
                <h1>5</h1>
            </div>
            <div className={styles.elem}>
                <h1>6</h1>
            </div>
            <div className={styles.elem}>
                <h1>7</h1>
            </div>

        </motion.dev>

        <motion.dev
        style={{x:x2}}
         className={styles.slider}>
            <div className={styles.elem}>
                <h1>1</h1>
            </div>
            <div className={styles.elem}>
                <h1>2</h1>
            </div>
            <div className={styles.elem}>
                <h1>3</h1>
            </div>
            <div className={styles.elem}>
                <h1>4</h1>
            </div>
            <div className={styles.elem}>
                <h1>5</h1>
            </div>
            <div className={styles.elem}>
                <h1>6</h1>
            </div>
            <div className={styles.elem}>
                <h1>7</h1>
            </div>

        </motion.dev>
    </div>
  )
}

export default sliderr