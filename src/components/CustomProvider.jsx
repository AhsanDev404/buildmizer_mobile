
import React from 'react'
import { PaperProvider } from 'react-native-paper';

export default function CustomProvider({children}) {
  return (
    <>
    
     <PaperProvider>
        {children}
     </PaperProvider>
    </>
  )
}