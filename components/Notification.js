
import React from 'react'
import {
  Box,
  Center,
  VStack,
  Text,
  Spacer
} from '@chakra-ui/react'

import WarningIcon from '@mui/icons-material/Warning';

export const Notification = ({ color, time, status }) => {
  return (
    <>
      <Box bgColor={'white'} width={'100%'} padding={5  }>
        <Center justifyContent={'center'}>
          <WarningIcon sx={{ color: 'red', fontSize: '48px' }} />
          <Spacer/>
          <VStack alignItems={'start'}>
            <Text as='b' fontSize={'lg'}>{status}</Text>
            <Text color={'gray.600'} as={'i'}>{time}</Text>
          </VStack>
          <Spacer/>
        </Center>
      </Box>
    </>
  )
}
