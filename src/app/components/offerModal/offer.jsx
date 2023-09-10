"use client"
import React , {useEffect}  from 'react'
import styles from './styles.module.css'


//zustand 
import useModalStore from '@app/stores/offerStore'

const Offer = ({ children }) => {
    const { isModalOpen, toggleModal } = useModalStore();

const handleCloseWrapper = (e)=> {
    if (e.target.id === 'modalWrapper' && isModalOpen )
    toggleModal()
}
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
    <div 
    onClick={handleCloseWrapper}
    className={styles.outContainer}
    id='modalWrapper'
    >
        <div className={styles.innerContainer}>
        <div className={styles.buttonContainer}>
             <button
             className={styles.closeButton}
             onClick={toggleModal}>X</button>

           </div>

            <div className={styles.modalBody}>
                {children}
            </div>

        </div>

       
       
    </div>
    )
  
}

export default Offer