
import React from 'react'
import {
    VStack,
    Text,
    Divider,
    Box
} from '@chakra-ui/react'

export const SideBar = ({children, name}) => {
    return (
        <>
            <Box>   
                <Text fontSize={'xl'} textAlign={'center'}>{name}</Text>
                <Divider my={2}/>
                <VStack alignItems={'start'}>
                    
                    {children}

                </VStack>
            </Box>
        </>
    )
}
