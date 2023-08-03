/* import {create } from 'zustand';

import React from 'react' */ 

import { create } from 'zustand';

export const useFeatureStore = create((set) => ({
    inViewFeature: null,
    setInViewFeature: (feature) => set({ inViewFeature: feature }),
  }));
