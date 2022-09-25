
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
            <Box bgColor={'white'} px={4} pb={1} height={'100%'} width={"auto"} maxHeight={'4xl'} overflowY={'scroll'}>
                <Box p={2} textAlign={'center'} bgColor={'white'} sx={{ position: '-webkit-sticky', position: 'sticky', top: '0', }}>
                    <Text as={'b'} fontSize={'2xl'}>
                        {name}
                    </Text>
                </Box>
                <VStack alignItems={'start'}>

                    {children}

                </VStack>
            </Box>
        </>
    )
}
