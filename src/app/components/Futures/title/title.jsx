"use client"

import React, { useEffect, useRef } from 'react';
import { inView, useInView } from 'framer-motion';
import classNames from 'classnames';
import { useFeatureStore } from '../stores';

import styles from './styles.module.css'

//components 
import Header from '@app/components/title-gr/title-gr.jsx'

const Title = ({ text , text2,title , id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-0% 0px -0% 0px' });

  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);

  useEffect(() => {
    if (isInView) setInViewFeature(id);
  }, [isInView, id, setInViewFeature]);

  return (
    <div className={classNames(
      styles.textContainer,
      isInView ? styles.highlight : styles.light
    )}>
        <h1 className={classNames(
          styles.title,
        )}>{title}</h1>
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