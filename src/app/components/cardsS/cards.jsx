"use client"
import React , { useRef} from 'react'
import styles from './styles.module.css'

import { projects } from './data'
import Card from './card/card'
import { useScroll } from 'framer-motion'
//smooth scrolling 
/* import Lenis from '@studio-freight/lenis' */


const Cards = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
      })
/* 
      useEffect( () => {
        const lenis = new Lenis()
    
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
      }) */


  return (
    <div className={styles.container} ref={container}>
        <div className={styles.innerContainer}>
        {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          const targetOpacity = 1 - ((projects.length - i) * 0.15);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} targetOpacity={targetOpacity}/>
        })
      }
        </div>
    </div>
  )
}

export default Cards