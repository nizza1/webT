"use client"
import React from 'react'
import styles from './styles.module.css'
import classNames from 'classnames'
import Image from 'next/image'

/* import Lottie from "lottie-react";

import uxui from '@app/animations/bbbb.json';
import res from '@app/animations/res.json';
import speed from '@app/animations/speeed.json';
import search from '@app/animations/seoo.json'; */

const indivi = '/illustrations/Design team-bro.svg';
const respons = '/illustrations/Responsive-bro.svg';
const searchE = '/illustrations/Search engines-bro.svg';


import {useFeatureStore} from '../../stores';

const Card = ({number , imgPath}) => {

  const inViewFeature = useFeatureStore((state)=> state.inViewFeature);


  return (
    <div className={classNames(
      styles.container,
      inViewFeature === number ? styles.show : styles.hide
    )}>
        


        <Image
        className={classNames(
          styles.animationContainer,
          inViewFeature === '1' ? styles.show : styles.hide
           )}

        src={indivi}
        fill={true}
        alt='individuelles design'
        />

<Image
        className={classNames(
          styles.animationContainer,
          inViewFeature === '2' ? styles.show : styles.hide
           )}

        src={respons}
        fill={true}
        alt='responsive design'
        />

<Image
        className={classNames(
          styles.animationContainer,
          inViewFeature === '4' ? styles.show : styles.hide
           )}

        src={searchE}
        fill={true}
        alt='seo'
        />

{/*
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
       renderer='svg' /> */}
       
    </div>
  )
}

export default Card