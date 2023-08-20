"use client"

import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';
/* import Lottie from 'lottie-react'; */
/* import myAnimation from '@app/animations/animation_ll5965nn.json'; */

import { motion, useScroll , useSpring ,useMotionValueEvent, useTransform} from "framer-motion"

const Tes = () => {
  const [xline , setXline] = useState(0);

    const ref = useRef(null);
    const animatedLineRef = useRef(null);

    const { scrollYProgress } = useScroll({ container: ref });


  /*   const scaleX = useSpring(scrollYProgress, {
       stiffness: 300,
        damping: 50,
        restDelta: 0.0
      }); */
 


      useMotionValueEvent(scrollYProgress, "change", (latest) => {

        console.log("Page scroll: ", (latest * 100).toFixed(2) )

        animatedLineRef.current.style.left = `${(latest * 100).toFixed(2)}%`;
    
      })
     
    

      

    return (
      <div className={styles.container}>
        
        

         <div className={styles.refContainer} >

               <div ref={ref} className={styles.li}>

                   <div className={styles.lic}>

                   <div className={styles.stickyChild}>

                   

                    <div className={styles.childBar}>

                        <div className={styles.progressBar}>


                             

                             
                               <div className={styles.animatedLineWrapper}>
                                       <div
                                         className={styles.animatedLine}
                                         ref={animatedLineRef}
                                         />
                                   </div> 
                      

                               <div className={styles.abLine}>

                                  <div className={styles.siLine}>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stampsB}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stampsB}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      
                                 
                                  </ div>

                                  <div className={styles.siLine}>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stampsB}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stampsB}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      
                                 
                                  </ div>

                                  <div className={styles.siLine}>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stampsB}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stampsB}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      
                                 
                                  </ div> <div className={styles.siLine}>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stampsB}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stampsB}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      <div className={styles.stamps}></div>
                                      
                                 
                                  </ div>

                                  
                                 
                                 
                                  
                               </div>

                             </div> 
                        </div>

            

                    </div>

                   </div>

                   </div>
              
              </div>
            
           
         </div>

      
    );
  };
  
  export default Tes;


  /* 
  <Lottie animationData={animationData} progress={animationProgress} />
  */