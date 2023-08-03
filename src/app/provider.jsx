// app/providers.tsx
'use client'

import React from 'react'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider /* CSSReset */ } from '@chakra-ui/react';


const Providers = ({children}) => {
  return (
    <CacheProvider>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}

export default Providers