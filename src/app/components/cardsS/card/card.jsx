'use client'
import React , {useRef} from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import { useTransform, motion } from 'framer-motion';
import Highlight from '@app/components/title-gr/title-highlight/highlight';


const Card = ({i, title,highlightWord , description , description2, color, progress, range, targetScale , targetOpacity}) => {
    const container = useRef(null);
/*     const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  }) */

 
  const scale = useTransform(progress, range, [1, targetScale]);

  const backgroundOpacity = useTransform(progress, range, [1, targetOpacity]);

/*   const renderTitle = (title) => {

    const words = title.split(" ");
    return words.map((word, index) => {

        if (word === "Design") {
            return <Highlight key={index} text={word} />;
        }
        return word + " "; 
    });
}; */

/* const renderTitle = (title, highlightWord) => {
  return title.split(" ").map((word, index) => (
      word === highlightWord ? <Highlight key={index} text={word} /> : word + " "
  ));
}; */

const renderTitle = (title, highlightWord) => {
  return title.split(" ").map((word, index) => {
      // Check if the word is the one to be highlighted
      if (word === highlightWord) {
          // Add a space after the highlighted word
          return <Highlight text={word} /> ;
      } else {
          // Add a space after regular words
          return <span key={index}> {word} </span>;
      }
  });
};


  return (
    <div ref={container} className={styles.cardContainer}>
        <motion.div 
        style={{backgroundColor: color, scale, top:`calc(-5vh + ${i * 15}px)`}} 
        className={styles.card}
      >

               <motion.div 
                    style={{ opacity: backgroundOpacity }}
                    className={styles.cardBackground}
                />
     <h1>{renderTitle(title, highlightWord)}</h1>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
          </div>

          <div className={styles.description}>
            <p>{description2}</p>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default Card