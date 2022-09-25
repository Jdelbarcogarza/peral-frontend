
import React from 'react'
import {
  Box,
  Center,
  VStack,
  Text,
  Spacer
} from '@chakra-ui/react'

import WarningIcon from '@mui/icons-material/Warning';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const Notification = ({ color, time, status }) => {
  return (
    <>
      <Box bgColor={'white'} width={'100%'} padding={1}>
      
        <Center justifyContent={'space-around'}>
    
          {

            status === 'CRITICO' ? <WarningIcon  sx={{ color: 'red', fontSize: '48px' }} />
            : status === 'NORMAL' ? <CheckCircleIcon sx={{color: 'green', fontSize: '48px'}} /> : <WarningAmberIcon sx={{color: '#ED8936', fontSize: '48px'}}/> 
          }
          
          <VStack alignItems={'start'}>
            <Text as='b' fontSize={'lg'}>{status}</Text>
            <Text color={'gray.600'} as={'i'}>{time}</Text>
          </VStack>
          
        </Center>
      </Box>
    </>
  )
}
