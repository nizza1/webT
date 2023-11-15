"use client"

import React , { useEffect} from 'react'
import styles from './styles.module.css'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

//icons 
import { AiOutlineHome } from "react-icons/ai";
//components 
import useStore from '@app/stores/navStore'

const NavButton = () => {

const pathName = usePathname();

const { isActive, toggleIsActive } = useStore();

useEffect(() => {
  const htmlElement = document.querySelector('html');
  if (isActive) {
    htmlElement.classList.add(styles.overflow);
  } else {
    htmlElement.classList.remove(styles.overflow);
  }

  // Cleanup: Remove the class when the component unmounts
  return () => {
    htmlElement.classList.remove(styles.overflow);
  };
}, [isActive]);

  return (
    <>
    { pathName === '/' ?
    ( <button className={`${styles.container} 
    ${isActive ? styles.active : ''}`}
    onClick={toggleIsActive}>
      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
    </button>)
    :
    (<Link href='/'
    className={styles.homeLink}>
       <AiOutlineHome /> </Link>)
    }
  
    </>
  )
}

export default NavButton