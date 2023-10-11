"use client"

import React, { useEffect, useRef ,useState} from 'react';
import { inView, useInView } from 'framer-motion';
import classNames from 'classnames';
import { useFeatureStore } from '../stores';

import styles from './styles.module.css'

//components 


const Title = ({ text , text2,title , id }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);

  const isInView = useInView(ref, { margin: '-0% 0px -0% 0px' });

  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);


  useEffect(() => {

    if (isInView) setInViewFeature(id);


  }, [isInView, id, setInViewFeature]);

  return (
    <div 
    ref={containerRef}
    className={classNames(
      styles.textContainer,
      isInView ? styles.highlight : styles.light
    )}>
        <h1 className={styles.title}
        >{title}
         </h1>
      

      <p
        ref={ref}
        className={styles.p}
      >
        {text}
        {/* {id} */}
      </p>

      <p
        ref={ref}
        className={styles.p}
      >
        {text2}
      </p>

    </div>
  );
};

export default Title;