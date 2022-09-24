import { 
  Button,
  HStack,
  Text,
} from '@chakra-ui/react'


import React from 'react'

export const Navbar = () => {
  return (
    <HStack bgColor={'blue.700'} px={4}>
    <Text fontSize={'5xl'} color={'white'}>
      Peral
    </Text>
    </HStack>
  )
}
