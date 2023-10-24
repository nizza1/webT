"use client"
import React , { useState } from 'react'
import styles from './styles.module.css'

import Image from 'next/image'
//lottie 

//components
import ContactButton from '@app/components/buttons/contactButton/contactButton'
import { sendContactForm } from '@helpers/sendForm';

import FirstCall from '../buttons/contactButton/firstCall/firstCall'
import ContactData from './contact-data/contactData'

//icons
import {AiOutlineUser , AiOutlineMessage} from 'react-icons/ai'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {FiPhone} from 'react-icons/fi'

const map = '/die-adresse-min.jpg'

const initValues = {theName: '',email: '' , subject: '', message: ''};
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
        try {
          const response = await sendContactForm(values)
          if (response.ok) {
            const data = await response.json();
            alert(data.message);
          } else {
            const errorData = await response.json();
            alert(errorData.message);
          }

        } catch (e) {
          alert(e);
        }
    }

  return (
    <div className={styles.container}>
        <div className={styles.innerContainer} id='contact-section' >
            <div className={styles.social} >

               <div className={styles.mapContainer}>
                <Image 
                src={map}
                width={400}
                height={300}
                alt='location on map'
                style={{
                  objectFit: 'cover',
                  width: '100%',
                }}
                />
               </div>
                <ContactData />
                
                <div className={styles.callButtonContainer}>
                  <FirstCall text='KOSTENLOSES ERSTGESPRÄCH' position='contact' time='ca.15 Minuten'/>
                </div>
            </div>
        <form className={styles.contactForm}  onSubmit={hanleSubmit} >

            < div className={styles.inputContainer} >
               < label htmlFor='theName'
                className={styles.label}
                >
                  Name
                </label>
               < input type='text'
                name='theName'
                placeholder='z.b John'
                className={styles.inputField} 
                /* value={values.name} */
               onChange={handleChange}/>  
               <AiOutlineUser className={styles.iconInput}/>
             </div>
             < div className={styles.inputContainer} >
               < label htmlFor='email'
               className={styles.label}
               >E-Mail</label>
                
               < input type='email'
                name='email' 
                placeholder='z.b John@gmail.com'
                className={styles.inputField} 
               onChange={handleChange}/>
               <MdOutlineAlternateEmail className={styles.iconInput} />
             </div>
             < div className={styles.inputContainer} >
               < label htmlFor='subject'
               className={styles.label}
               >Telefonnummer</label>
               
               < input type='number'
                name='subject'
                className={styles.inputField} 
                placeholder='Ihre Telefonnummer'
                /* value={values.name} */
               onChange={handleChange}/>  
               <FiPhone className={styles.iconInput} />
             </div>

             < div className={styles.inputContainer} >
               < label htmlFor='message' 
               className={styles.label}
               >Wie können wir Ihnen helfen?</label>
               
               < textarea 
                rows="4"
                name='message' 
                placeholder='Ihre Nachricht'
                className={styles.inputField}
               onChange={handleChange} />
               <AiOutlineMessage className={styles.iconInput} />
             </div>
             <div className={styles.buttonContainer}>
             <ContactButton text='Senden' type='submit' position='contactForm'/>
             </div>
            
        </form>
        </div>
    </div>
  )
}

export default Contact