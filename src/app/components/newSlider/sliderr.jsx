import React , {useRef} from 'react'
import styles from './styles.module.css'
import {useScroll , useTransform} from 'framer-motion'
const sliderr = () => {

   /*  const container = useRef(null); */
/*     const {scrollYProgress} = useScroll({ 
        target: container ,
        offset: ['start', 'end'], ['end', 'start']
    }) */

    
  return (
    <div className={styles.container}>
        <div className={styles.slider}>
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

        </div>
    </div>
  )
}

export default sliderr