import React from 'react'
import styles from './styles.module.css'

//components 
import Tes from '@app/components/tes/tes'

export const metadata = {
    title: 'test..',
    description: 'testDes'
  }

const Test = () => {
  return (
    <main className={styles.main}>
       <Tes />
    </main>
  )
}

export default Test