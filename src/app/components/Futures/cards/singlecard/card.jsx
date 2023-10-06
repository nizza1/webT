"use client"
import React , {useState} from 'react'
import styles from './styles.module.css'
import classNames from 'classnames'
import Image from 'next/image'

import Lottie from "lottie-react";

import uxui from '@app/animations/bbbb.json';
import res from '@app/animations/res.json';
import speed from '@app/animations/speeed.json';
import search from '@app/animations/seoo.json';


import {useFeatureStore} from '../../stores';

const Card = ({number , imgPath}) => {

  const inViewFeature = useFeatureStore((state)=> state.inViewFeature);


  return (
    <div className={classNames(
      styles.container,
      inViewFeature === number ? styles.show : styles.hide
    )}>
        {/* <h1>{number}</h1> */}
       {/*  <Image className={styles.img} src={imgPath} alt='' width={200} height={300} /> */}
     {/*  <Lottie className={styles.animationContainer} animationData={number === '1' ? uxui : speed} /> */}

     {/*  <Lottie className={classNames(
      styles.animationContainer,
     
       )}
       animationData={speed} /> */}


        <Lottie className={classNames(
      styles.animationContainer,
      inViewFeature === '2' ? styles.show : styles.hide
       )}
       animationData={res}
       renderer='svg' />

      <Lottie className={classNames(
      styles.animationContainer,
      inViewFeature === '1' ? styles.show : styles.hide
       )}
       animationData={uxui}
       renderer='svg' />


        <Lottie className={classNames(
      styles.animationContainer,
      inViewFeature === '3' ? styles.show : styles.hide
       )}
       animationData={speed}
       renderer='svg' />

        <Lottie className={classNames(
      styles.animationContainer,
      inViewFeature === '4' ? styles.show : styles.hide
       )}
       animationData={search}
       renderer='svg' />
       
  
    {/*   <Lottie className={styles.animationContainer} animationData={res} />
      <Lottie className={styles.animationContainer} animationData={speed} /> */}
    </div>
  )
}

export default Card