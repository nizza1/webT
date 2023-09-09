"use client"
import React , {useEffect}  from 'react'
import styles from './styles.module.css'


//zustand 
import useModalStore from '@app/stores/offerStore'

const Offer = () => {
    const { isModalOpen, toggleModal } = useModalStore();

    useEffect(() => {
        const htmlElement = document.querySelector('html');
        if (isModalOpen) {
          htmlElement.classList.add(styles.overflow);
        } else {
          htmlElement.classList.remove(styles.overflow);
        }
    
        // Cleanup: Remove the class when the component unmounts
        return () => {
          htmlElement.classList.remove(styles.overflow);
        };
      }, [isModalOpen]);

    if (!isModalOpen) return null;
    
  return (
    <div className={styles.outContainer}>
        <div className={styles.innerContainer}>

            <div className={styles.modalHeader}>
            <h1>here is the modal</h1>
           <div className={styles.buttonContainer}>
           <button
           className={styles.closeButton}
            onClick={toggleModal}>X</button>

           </div>

            </div>
            


        </div>

       
       
    </div>
    )
  
}

export default Offer