"use client"

import styles from './styles.module.css'

import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';


import React from 'react'

const Questions = () => {
    const clickedTitle = '#C9E300'
  return (
    <>
         <div className={styles.container}>
         <div className={styles.innerContainer}>

            <div className={styles.titleContainer}>
                <h1 className={styles.title}>FAQs</h1>
             
                <p className={styles.textUnderTitle}>Sie haben noch Frage? Ihre Frage wird hier nicht beantwortet? Zögern Sie nicht und nehmen Sie mit uns Kontakt </p>
            </div>

            <div className={styles.FaqsContainer}>
            <Accordion allowToggle className={styles.accordion}>
        <AccordionItem className={styles.textContainer}>
        <h2 >
          <AccordionButton _expanded={{ bg: 'transparent'}}className={styles.questionContainer}  >
          <Box  as="span" flex='1' textAlign='left'>
          Wie siehts mit Wartung und Pflege aus?

        </Box>
         <AccordionIcon />
         </AccordionButton>
       </h2>
         <AccordionPanel className={styles.answer}>
         Wir legen großen Wert auf langfristige Partnerschaften mit unseren Kunden. Nach der Einführung Ihrer Website besprechen wir gerne mit Ihnen, wie wir die Website in Zukunft warten, pflegen und weiterentwickeln können.

         </AccordionPanel>
         </AccordionItem>

         <AccordionItem className={styles.textContainer}>
        <h2 >
          <AccordionButton _expanded={{ bg: '' }}className={styles.questionContainer}  >
          <Box  as="span" flex='1' textAlign='left'>
          Wie lange dauert es, bis meine neue Website live gehen kann?
        </Box>
         <AccordionIcon />
         </AccordionButton>
       </h2>
         <AccordionPanel className={styles.answer}>
         Abhängig vom Projekt dauert die Entwicklung einer Website vom Erstgespräch bis zur Fertigstellung zwischen 4-8 Wochen.

         </AccordionPanel>
         </AccordionItem>

         <AccordionItem className={styles.textContainer}>
        <h2 >
          <AccordionButton _expanded={{ bg: ''}}className={styles.questionContainer}  >
          <Box  as="span" flex='1' textAlign='left'>
          Ich besitze schon eine Website. Kann diese angepasst werden?
        </Box>
         <AccordionIcon />
         </AccordionButton>
       </h2>
         <AccordionPanel className={styles.answer}>
         Ja, aber um das herauszufinden, vereinbaren wir am besten wir einen kurzen Termin, um Ihre aktuelle Website gemeinsam zu besprechen. So können wir entdecken, wie wir sie noch verbessern können.

         </AccordionPanel>
         </AccordionItem>

         <AccordionItem className={styles.textContainer}>
        <h2 >
          <AccordionButton _expanded={{ bg: ''}}className={styles.questionContainer}  >
          <Box  as="span" flex='1' textAlign='left'>
          Welche Unterstützung bieten Sie bei der Übertragung meiner Website?
        </Box>
         <AccordionIcon />
         </AccordionButton>
       </h2>
         <AccordionPanel className={styles.answer}>
         Sie haben die Wahl, wo Ihre Website gehostet wird und welche Domain Sie verwenden möchten. Wir helfen Ihnen, die beste Lösung für Ihre Bedürfnisse zu finden und unterstützen Sie bei der Übertragung. 

         </AccordionPanel>
         </AccordionItem>

         <AccordionItem className={styles.textContainer}>
        <h2 >
          <AccordionButton _expanded={{ bg: ''}}className={styles.questionContainer}  >
          <Box  as="span" flex='1' textAlign='left'>
          Können Sie mir auch mit den Fotos für mein Unternehmen helfen?
        </Box>
         <AccordionIcon />
         </AccordionButton>
       </h2>
         <AccordionPanel className={styles.answer}>
         Gerne! Wir haben ein Netzwerk von professionellen Fotografen, die Ihnen Bilder von Ihrem Unternehmen oder Ihrem Team erstellen können. Sprechen Sie uns einfach an, wir helfen Ihnen gerne weiter.

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