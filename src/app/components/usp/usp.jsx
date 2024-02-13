"use client"

import React, { useRef } from 'react'
import Highlight from '../title-gr/title-highlight/highlight'
import styles from './styles.module.css'

import { useScroll , useSpring , motion , useTransform } from 'framer-motion'

const Usp = () => {

   const container = useRef(null);

   const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start center', 'end end']
      })

   const scale = useTransform(scrollYProgress, [0, 1], [1,0.7]);
   const opacity = useTransform(scrollYProgress, [0, 1], [1 , 0.3]);

   const smoothS = useSpring(scale, {stiffness: 400, damping: 90})
   const transSpan = useTransform(scrollYProgress, [0, 1], [0 , 500]);
  return (
    <section className={styles.co} id='nextS' >
        <motion.article className={styles.innerCo}  ref={container} style={{scale:smoothS , opacity}} >
        <div className={styles.titleCo}>
            <h1>
                <Highlight text='Entdecken Sie den Unterschied!'/>
            </h1>
        </div>

        <div className={styles.textCo}>
            <p>
            Erhalten Sie Ihren ersten Entwurf <Highlight text='kostenlos'/> und <Highlight text='unverbindlich'/> <motion.span className={styles.rocket} /* style={{translateY:`${transSpan}px`}} */></motion.span>
            </p>
        </div>
        </motion.article>
        
    </section>
  )
}

export default Usp