"use client"

import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';
/* import Lottie from 'lottie-react'; */
/* import myAnimation from '@app/animations/animation_ll5965nn.json'; */

import { motion, useScroll , useSpring ,useMotionValueEvent} from "framer-motion"

const Tes = () => {

    const ref = useRef(null);
    const animatedLineRef = useRef(null);

    const { scrollYProgress } = useScroll({ container: ref });

    const refTes = useRef(null);


      useMotionValueEvent(scrollYProgress, "change", (latest) => {

        console.log("Page scroll: ", (latest * 100).toFixed(2) )

        animatedLineRef.current.style.left = `${(latest * 100).toFixed(2)}%`;
    
      })
    
      const handlePostion = () => {
        const rect = refTes.instance.getBoundingClientRect().top;
    
        console.log('View Offset:', rect);
      }
      

    return (
      <div  className={styles.container}>

        <div className={styles.placeHolder}>

          <div className={styles.newContainer}>

            <div className={styles.firsSlider}>
              <div className={styles.project}>
                <h1>1</h1>
              </div>

              <div className={styles.project}>
                <h1>2</h1>
              </div>

              <div className={styles.project}>
                <h1>3</h1>
              </div>

              <div className={styles.project}>
                <h1>4</h1>
              </div>

              <div className={styles.project}>
                <h1>5</h1>
              </div>

              <div className={styles.project}>
                <h1>6</h1>
              </div>
            </div>
          </div>


        </div>
        
        

         <div  className={styles.refContainer} >

               <div ref={ref} className={styles.li}>

                   <div  className={styles.lic}>

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