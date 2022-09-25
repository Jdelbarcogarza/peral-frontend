import Image from 'next/image'
import {Box} from '@chakra-ui/react'
import renderGIF from '../assets/videos/RenderPipe.gif'

export default function RenderView() {
  return (
    <Box overflow={"hidden"} backgroundColor={"black"} width={"auto"} height={"auto"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Image style={{overflow:"hidden"}} src={renderGIF} alt="render gif" width={"2700%"} height={"1900%"}/>
    </Box>
  )
}
