"use client"

import React from 'react'
import styles from './styles.module.css'

import { useRef , useState , useEffect} from "react";
import { motion, useScroll } from "framer-motion";

import {MdOutlineWorkOutline} from 'react-icons/md'
import {AiOutlineUser } from 'react-icons/ai'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {FiPhone} from 'react-icons/fi'
import {BsArrowRightSquareFill, BsArrowLeftSquareFill} from 'react-icons/bs'

const preisAngebot = () => {
  

  const containerRef = useRef(null);
  const cardRef = useRef(null);

  const { scrollXProgress } = useScroll({ container: containerRef });
  const prozent = parseInt((scrollXProgress.current * 100).toString());

  const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScrollPosition, setMaxScrollPosition] = useState(0);

    const handleScrollLeft = () => {
      containerRef.current.scrollTo({
        left: scrollPosition - cardRef.current.offsetWidth,
        behavior: 'smooth',
      });
    };
  
    const handleScrollRight = () => {
      containerRef.current.scrollTo({
        left: scrollPosition + containerRef.current.offsetWidth,
        left: scrollPosition + cardRef.current.offsetWidth,
        behavior: 'smooth',
      });
    };

    const handleScroll = () => {
      setScrollPosition(containerRef.current.scrollLeft);
      setMaxScrollPosition(
        containerRef.current.scrollWidth - containerRef.current.offsetWidth
      );
  
    };

    useEffect(() => {
      setMaxScrollPosition(
        containerRef.current.scrollWidth - containerRef.current.offsetWidth
      );
    }, []);


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.circleCo}>
          <div className={styles.prozent}><p>{prozent}%</p></div>
        <svg width="70" height="70" viewBox="0 0 100 100" className={styles.svg}>
        <circle cx="50" cy="50" r="40" pathLength="1" className={styles.svgCircle} />

        <motion.circle
          cx="50"
          cy="50"
          r="40"
          pathLength="1"
          className={styles.indicator}
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
        </div>
      </div>
      
      <div ref={containerRef} 
      onScroll={handleScroll} 
      className={styles.cBody}>

        <div ref={cardRef} className={styles.questionContainer}>
          
          <div className={styles.an}>
         
          <p className={styles.questionText}>In welcher Branche sind Sie tätig:</p>
          <div className={styles.spacingButtom}>
          <MdOutlineWorkOutline className={styles.icons}/>
          <input
          className={styles.textInput}
            type="text"
            name="branche"
           /*  value={formData.branche}
            onChange={handleInputChange} */
            placeholder='z.B. Unternehmensberatung ....'
          />
          </div>
          
        
          </div>
        </div>
       
        <div ref={cardRef} className={styles.questionContainer}>
          <div className={styles.overlay}></div>
          <div className={styles.an}>
          
          <p className={styles.questionText}>Wieviele Seiten soll Ihre Website haben:</p>
       
          <div className={styles.optionsContainer}>
            <div>
            <input type="radio" name="numberOfSite" value="1" id='1op' />
             <label htmlFor="1op">1</label>
            </div>

            <div>
            <input type="radio" name="numberOfSite" value="2-5" id='2-5op'/>
             <label for="2-5op">2-5</label>
            </div>

            <div>
            <input type="radio" name="numberOfSite" value="ab5" id='ab5op'/>
             <label for="ab5op">Ab 5</label>
            </div>

            <div>
            <input type="radio" name="numberOfSite" value="Weiß ich noch nicht" id='Weiß ich noch nicht'/>
             <label for="Weiß ich noch nicht">Weiß ich noch nicht</label>
            </div>
          

          </div>
          </div>
        </div>

        <div ref={cardRef} className={styles.questionContainer}>
          
          <div className={styles.an}>
          
            <p className={styles.questionText}>Wer soll die Betreuung Ihrer Website übernehmen:</p>
          
          <div className={styles.optionsContainer}>
            <div>
               <input type="radio" name="betreueung" value="Ich-selbst" id='Ich-selbst-op' />
               <label htmlFor="Ich-selbst-op">Ich selbst</label>
            </div>

            <div>
               <input type="radio" name="betreueung" value="Ihre-Agentur"  id='Ihre-Agentur'/>
               <label htmlFor="Ihre-Agentur">Ihre Agentur</label>
            </div>

            <div>
               <input type="radio" name="betreueung" value="weiß ich noch nicht"  id='weiß ich noch nicht'/>
               <label htmlFor="weiß ich noch nicht">Weiß ich noch nicht</label>
            </div>
             
             
          </div>

          </div>
        </div>

        <div ref={cardRef} className={styles.questionContainer}>
          
          <div className={styles.an}>
          <p className={styles.questionText}>Sind zukünftig Marketingmaßnahmen notwendig?</p>
          <p className={styles.questionText}>Wenn ja</p>

          <div className={styles.checkBoxContainer}>
            
         <div>
             <input type="checkbox" name="marketing" value="facebook-check" id='facebook-check' />
            <label htmlFor="facebook-check"> Facebook Ads</label>
         </div>
         <div>
             <input type="checkbox" name="marketing" value="Google-ads" id='Google-ads' />
            <label htmlFor="Google-ads"> Google Ads</label>
         </div>
         <div>
             <input type="checkbox" name="marketing" value="andere-ch" id='andere-op' />
            <label htmlFor="andere-op">Andere</label>
         </div>
        
            


          </div>
          </div>
        </div>

        <div ref={cardRef} className={styles.questionContainer}>
          
          <div className={styles.an}>
          <p className={styles.questionText}>Welche Ziele möchten Sie mit Ihrer Website erreichen?</p>

          <div className={styles.checkBoxContainer}>
            
         <div>
             <input type="checkbox" name="ziele-der-website" value="kunden-gewinnen" id='kunden-gewinnen' />
            <label htmlFor="kunden-gewinnen"> Kunden gewinnen / Umsatz steigern</label>
         </div>
         <div>
             <input type="checkbox" name="ziele-der-website" value="auffindbarkeit-erhöhen" id='auffindbarkeit-erhöhen' />
            <label htmlFor="auffindbarkeit-erhöhen"> Auffindbarkeit in meiner Umgebung erhöhen</label>
         </div>
         <div>
             <input type="checkbox" name="ziele-der-website" value="mitarbeiter-gewinnen" id='mitarbeiter-gewinnen' />
            <label htmlFor="mitarbeiter-gewinnen"> Mitarbeiter gewinnen</label>
         </div>
         <div>
             <input type="checkbox" name="ziele-der-website" value="andere-ziele" id='andere-ziele' />
            <label htmlFor="andere-ziele"> Andere (möchte ich mit Ihnen besprechen)</label>
         </div>

          </div>
          </div>
        </div>

        <div ref={cardRef} className={styles.questionContainer}>
          
          <div className={styles.an}>
          <p className={styles.questionText}>Texte und Bilder für Ihre Website:</p>

          <div className={`${styles.optionsContainer} ${styles.borderButtom}`}>

            <div>
              <input type="radio" name="texte-für-website"   value="werden-bereitgestellt" id="werden-bereitgestellt" />
               <label htmlFor="werden-bereitgestellt">Texte werden bereitgestellt</label>
            </div>

            <div>
               <input type="radio" name="texte-für-website"    value="durch-designer" id="durch-designer"/>
                <label htmlFor="durch-designer">Designer soll die Texte erstellen</label>
            </div>
             
          </div>


         

          <div className={styles.optionsContainer}>

            <div>
            <input type="radio" name="bilder-für-website" value="werden-bereitgestellt" id="bilder-werden-bereitgestellt" />
             <label htmlFor="bilder-werden-bereitgestellt">Bilder werden bereitgestellt</label>
            </div>

            <div>
            <input type="radio" name="bilder-für-website" value="durch-designer" id="bilder-durch-designer"/>
             <label htmlFor="bilder-durch-designer">Designer soll die Bilder erstellen / Kaufen</label>

            </div>
            

            
          </div>

          
          </div>
        </div>

        <div ref={cardRef} className={styles.questionContainer}>
          
          <div className={styles.an}>
         
          <p className={styles.questionText}>Gleich geschafft! Bitte geben Sie Ihre Kontaktdaten ein:</p>
          
          <div className={styles.spacingButtom}>
            <MdOutlineAlternateEmail className={styles.icons}/>
          <input
           className={styles.textInput}
            type="email"
            name="email"
           /*  value={formData.branche}
            onChange={handleInputChange} */
            placeholder='Beispiel@gmail.com'
          />

          </div>

          <div className={styles.spacingButtom}>
            <FiPhone className={styles.icons}/>
          <input
            className={styles.textInput}
            type="tel"
            name="number"
           /*  value={formData.branche}
            onChange={handleInputChange} */
            placeholder='Telefonnummer'
            required
          />
          </div>

          <div className={styles.spacingButtom}>
            <AiOutlineUser className={styles.icons} />
          <input
            className={styles.textInput}
            type="text"
            name="name"
           /*  value={formData.branche}
            onChange={handleInputChange} */
            placeholder='Name'
            
          />
          </div>

          <div className={styles.spacingButtom}>
            <MdOutlineWorkOutline className={styles.icons}/>
          <input
            className={styles.textInput}
            type="text"
            name="firmen name"
           /*  value={formData.branche}
            onChange={handleInputChange} */
            placeholder='Firmen Name'
            
          />
          </div>
          
         
        
          </div>
        </div>

  
      </div>

      <div className={styles.cFooter}>
        <div className={styles.buttonsContainer}>
             <button 
             disabled={scrollPosition === 0}
              className={`${styles.btnLeft} ${ 
             scrollPosition === 0 ? styles.disabled : ''
            }`} 
             onClick={handleScrollLeft}>
               <span className={styles.iconC}>
               <BsArrowLeftSquareFill  />
               </span>
             Zurück
             </button>
             <button className={styles.btnRight} 
             onClick={handleScrollRight}>
             Weiter
             <span className={styles.iconC}>
               <BsArrowRightSquareFill  />
               </span>
             
           </button>
        </div>
      </div>
    </div>
  )
}

export default preisAngebot