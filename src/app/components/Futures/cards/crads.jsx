
import React from 'react'
import styles from './styles.module.css'


//components 
import SingleCard from './singlecard/card'

const Crads = () => {

  const ilCards = [
    {
      id : '1',
      number : '1',
      path: "uxui"
    },
    {
      id : '2',
      number : '2',
      path: "uxui"
    },
    {
      id : '3',
      number : '3',
      path: "res"
    },
    {
      id : '4',
      number : '4',
      path: "speed"
    },
    {
      id : '5',
      number : '5',
      path: "speed"
    }

  ]



  return (
    <div className={styles.container}>
      {ilCards.map((card)=> 
        (<SingleCard key={card.id} number={card.number} imgPath={card.path}/>)
      )}
    </div>
  )
}

export default Crads