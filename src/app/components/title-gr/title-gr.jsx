import React from 'react'
import styles from './styles.module.css'
const Title = ({text}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{text}</h1>
        </div>
  )
}

export default Title