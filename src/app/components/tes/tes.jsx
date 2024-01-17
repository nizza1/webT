"use client"

import React, {  useRef } from 'react';
import styles from './styles.module.css';


import {  useScroll ,useTransform ,useMotionValueEvent} from "framer-motion"

const Tes = () => {
 

    
    const animatedLineRef = useRef(null);
    const containerRef = useRef(null);



    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"]
  })


  const Y = useTransform(scrollYProgress, [0, 1], [1, 100])

  useMotionValueEvent(scrollYProgress, "change", (latest) => {

    console.log("Page scroll: ", (latest * 100).toFixed(2) )

    animatedLineRef.current.style.left = `${(latest * 100).toFixed(2)}%`;

  })





    return (
      <div  className={styles.container}>

 

         <div  className={styles.refContainer} /* ref={ref} */ ref={containerRef} >

               

                  

                   <div className={styles.stickyChild}>

                   

                    <div className={styles.childBar}>

                        <div className={styles.progressBar}>
                             
                               <div className={styles.animatedLineWrapper}
                               >
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

      
    );
  };
  
  export default Tes;


