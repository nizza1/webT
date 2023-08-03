"use client"
import styles from './styles.module.css'

import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

import Title from '../title-gr/title-gr';

import React from 'react'

const Questions = () => {
    const clickedTitle = '#C9E300'
  return (
    <>
         <div className={styles.container}>
         <div className={styles.innerContainer}>

            <div className={styles.titleContainer}>
                <Title text='FAQs'/>
             
                <p className={styles.textUnderTitle}>Sie haben noch Frage? Ihre Frage wird hier nicht beantwortet? Zögern Sie nicht und nehmen Sie mit uns Kontakt </p>
            </div>

            <div className={styles.FaqsContainer}>
            <Accordion allowToggle className={styles.accordion}>
        <AccordionItem className={styles.textContainer}>
        <h2 >
          <AccordionButton _expanded={{ bg: 'transparent',/*  color: clickedTitle  */}}className={styles.questionContainer}  >
          <Box  as="span" flex='1' textAlign='left'>
          Wie sieht's mit Wartung und Pflege aus?

        </Box>
         <AccordionIcon />
         </AccordionButton>
       </h2>
         <AccordionPanel className={styles.answer}>
         Am liebsten arbeite ich langfristig mit meinen Kunden zusammen. Nach dem Go-Live Ihrer Website können wir uns gerne über eine mögliche Wartung, Pflege und Weiterentwicklung des neuen Webauftritts unterhalten.

         </AccordionPanel>
         </AccordionItem>

         <AccordionItem className={styles.textContainer}>
        <h2 >
          <AccordionButton _expanded={{ bg: '', /* color: clickedTitle */ }}className={styles.questionContainer}  >
          <Box  as="span" flex='1' textAlign='left'>
          Wie lange dauert es, bis meine neue Website live gehen kann?
        </Box>
         <AccordionIcon />
         </AccordionButton>
       </h2>
         <AccordionPanel className={styles.answer}>
         Abhängig vom Projekt dauert die Entwicklung einer Website vom Erstgespräch bis zur Fertigstellung zwischen 2-4 Wochen. Hervorragende Qualität zu liefern bedeutet, dass ich maximal 2 neue Webprojekte pro Monat annehmen kann.

         </AccordionPanel>
         </AccordionItem>

         <AccordionItem className={styles.textContainer}>
        <h2 >
          <AccordionButton _expanded={{ bg: '', /* color: clickedTitle */ }}className={styles.questionContainer}  >
          <Box  as="span" flex='1' textAlign='left'>
          Ich besitze schon eine Website. Kann diese angepasst werden?
        </Box>
         <AccordionIcon />
         </AccordionButton>
       </h2>
         <AccordionPanel className={styles.answer}>
         Am besten vereinbaren wir einen kurzen Call, damit wir deine aktuelle Website gemeinsam analysieren können. In den meisten Fällen ist aber ein Relaunch sinnvoll, da oft veraltete Technologien oder nicht das richtige CMS zum Einsatz kommt.

         </AccordionPanel>
         </AccordionItem>

         <AccordionItem className={styles.textContainer}>
        <h2 >
          <AccordionButton _expanded={{ bg: '', /* color: clickedTitle */ }}className={styles.questionContainer}  >
          <Box  as="span" flex='1' textAlign='left'>
          Was kostet eine neue Website?
        </Box>
         <AccordionIcon />
         </AccordionButton>
       </h2>
         <AccordionPanel className={styles.answer}>
         Du hast jederzeit die volle Kostenkontrolle, denn du erhältst von mir in aller Regel einen Pauschalpreis, welcher natürlich verbindlich ist. Sollte es dennoch passieren, dass ein pauschales Angebot nicht möglich ist, rechne ich nach Aufwand ab. 

         </AccordionPanel>
         </AccordionItem>

         <AccordionItem className={styles.textContainer}>
        <h2 >
          <AccordionButton _expanded={{ bg: '', /* color: clickedTitle  */}}className={styles.questionContainer}  >
          <Box  as="span" flex='1' textAlign='left'>
          Wie läuft die Zusammenarbeit ab?
        </Box>
         <AccordionIcon />
         </AccordionButton>
       </h2>
         <AccordionPanel className={styles.answer}>
         Ein wertschätzender Umgang ist für mich das A & O, denn Webentwicklung und SEO sind meine größte Leidenschaft. Daher arbeite ich auch nur mit Kunden zusammen, die mit mir auf einer Wellenlänge liegen. Am liebsten arbeite ich langfristig mit dir zusammen.

         </AccordionPanel>
         </AccordionItem>

         <AccordionItem className={styles.textContainer}>
        <h2 >
          <AccordionButton _expanded={{ bg: '', /* color: clickedTitle  */}}className={styles.questionContainer}  >
          <Box  as="span" flex='1' textAlign='left'>
          Was, wenn ich das Ergebnis nicht mag?

        </Box>
         <AccordionIcon />
         </AccordionButton>
       </h2>
         <AccordionPanel className={styles.answer}>
         Aufgrund der Art dieser kreativen Arbeit biete ich keine Rückerstattungen an, nur garantiert smarte Websites, die funktionieren und planbar neue Kunden gewinnen! Wir arbeiten in allen Phasen eng zusammen, um Überraschungen zu vermeiden.

         </AccordionPanel>
         </AccordionItem>
      </Accordion>
            </div>
  
      
      

        </div>
     </div>
 
    </>
  )
}

export default Questions