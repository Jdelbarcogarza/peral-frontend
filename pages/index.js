import  NextLink from 'next/link'

import {

  Button,
  Box,
  Link,
  Center,
  Flex,

} from '@chakra-ui/react'

export default function Home() {
  return (
     <Flex height={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <NextLink href={'/dashboard'}>
        <Link>
          dashboard
        </Link>
      </NextLink>
      </Flex>
  )
}
