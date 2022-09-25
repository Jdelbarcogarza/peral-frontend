
import React from 'react'
import {
    VStack,
    Text,
    Divider,
    Box,
    Center
} from '@chakra-ui/react'

export const SideBar = ({ children, name }) => {
    return (
        <>
            <Box bgColor={'blue.200'} px={2} pb={2} height={'100%'} maxHeight={'4xl'} overflowY={'auto'}>
                <Box p={2} textAlign={'center'} bgColor={'blue.200'} sx={{ position: '-webkit-sticky', position: 'sticky', top: '0', }}>
                    <Text as={'b'} fontSize={'2xl'}>
                        {name}
                    </Text>
                    <Divider my={2} />
                </Box>
                <VStack alignItems={'start'}>

                    {children}

                </VStack>
            </Box>
        </>
    )
}
