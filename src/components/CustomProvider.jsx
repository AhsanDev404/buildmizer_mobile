
import React from 'react'
import { PaperProvider } from 'react-native-paper';
import { CustomTheme } from '../utils/theme';

export default function CustomProvider({children}) {
  return (
    <>
    
     <PaperProvider theme={CustomTheme}>
        {children}
     </PaperProvider>
    </>
  )
}