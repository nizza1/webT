"use client"

import React, { useEffect, useRef ,useState} from 'react';
import { inView, useInView } from 'framer-motion';
import classNames from 'classnames';
import { useFeatureStore } from '../stores';

import styles from './styles.module.css'

//components 
import Header from '@app/components/title-gr/title-gr.jsx'
import Highlight from '@app/components/title-gr/title-highlight/highlight';

const Title = ({ text , text2,title , id , highlight}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);

  const isInView = useInView(ref, { margin: '-0% 0px -0% 0px' });

  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);

  const [isSticky, setIsSticky] = useState(false);

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
        <h1 className={classNames(
          styles.title,
        )}>{title} </h1>
        {/* <Header className={styles.title} text={title}/> */}

      <p
        ref={ref}
        className={classNames(
          styles.p,
          /* isInView ? styles.highlight : styles.light */
        )}
      >
        {text}
        {/* {id} */}
      </p>

      <p
        ref={ref}
        className={classNames(
          styles.p,
         /*  isInView ? styles.highlight : styles.light */
        )}
      >
        {text2}
      </p>

    </div>
  );
};

export default Title;