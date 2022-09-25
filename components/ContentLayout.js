import React from 'react'
import {
    Box,
    Grid, 
    GridItem,
} from '@chakra-ui/react'

/*
Componente donde va todo el layout de cada tab
*/
export default function ContentLayout({ children }) {
  return (
   <>
    <Box bgColor={'teal.300'} height={'100%'} width={'100%'} padding={2}>
    {/** TODO: orgnizar para que se vaya a un lado con el grid */}
    {children }
    </Box>
   </> 
  )
}

