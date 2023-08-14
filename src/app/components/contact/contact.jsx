"use client"
import React , { useState } from 'react'
import styles from './styles.module.css'

//lottie 
import Lottie from "lottie-react";
import contactAnimations from '@app/animations/animation_ll2cdsoo.json';
//components
import ContactButton from '@app/components/buttons/contactButton/contactButton'
import Social from '@app/components/social/social'
import { sendContactForm } from '@helpers/sendForm';
import Title from '../title-gr/title-gr'
import FirstCall from '../buttons/contactButton/firstCall/firstCall'



const initValues = {name: '',email: '' , subject: '', message: ''};
const initState = {values: initValues};

const Contact = () => {

    const [state , setState ] = useState(initState);
    const {values}= state;

    const handleChange = ({target}) => setState((prev)=> ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value
        }
    }))

    const hanleSubmit = async(e)=> {
        e.preventDefault();
        await sendContactForm(values)
        console.log(state);
    }

  return (
    <div className={styles.container}>
        <div className={styles.innerContainer}>
            <div className={styles.social}>
                <Title text='Ich freue mich auf unsere Zusammenarbeit!' />

                <Lottie className={styles.animationsContact}
                  animationData={contactAnimations} />
                
                <div className={styles.callButtonContainer}>
                  <FirstCall text='Kostenlose Beratung vereinbaren'/>
                </div>
            </div>
        <form className={styles.contactForm} onSubmit={hanleSubmit} >

            < div className={styles.inputContainer} >
               < label htmlFor='name'
                className={styles.label}
                >Name</label>
               < input type='text'
                name='name'
                className={styles.inputField} 
                /* value={values.name} */
               onChange={handleChange}/>  
             </div>
             < div className={styles.inputContainer} >
               < label htmlFor='email'
               className={styles.label}
               >E-Mail</label>
               < input type='email'
                name='email' 
                className={styles.inputField} 
               onChange={handleChange}/>
             </div>
             < div className={styles.inputContainer} >
               < label htmlFor='subject'
               className={styles.label}
               >Worum geht es bei Ihrer Anfrage?</label>
               < input type='text'
                name='subject'
                className={styles.inputField} 
                /* value={values.name} */
               onChange={handleChange}/>  
             </div>
             < div className={styles.inputContainer} >
               < label htmlFor='message' 
               className={styles.label}
               >Wie kann ich Ihnen helfen?</label>
               < textarea 
                rows="4"
                name='message' 
                className={styles.inputField}
               onChange={handleChange} />
             </div>
             <div className={styles.buttonContainer}>
             <ContactButton text='Senden' type='submit' />
             </div>
            
        </form>
        </div>
    </div>
  )
}

export default Contact