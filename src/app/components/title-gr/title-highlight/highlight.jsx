import React from 'react'
import styles from './styles.module.css'
const Highlight = ({text}) => {
  return (
    <span className={styles.container}>{text}</span>
  )
}

export default Highlight