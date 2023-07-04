import React from 'react'
import {AiOutlineSend} from "react-icons/ai"
import{Box, Heading, Stack, VStack,Input, Button, HStack} from "@chakra-ui/react"

const Footer = () => {
  return (
   <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16" } color={"white"}>
    <Stack direction={["column","row"]}>
    <VStack alignItems={'stretch'} w={"full"} px={"4"} >
    <Heading size={"md"} textTransform={"uppercase"} textAlign={['center','left']}   >
        Subscribe to get updates
    </Heading>
    <HStack>
        <Input placeholder='enter email here..' borderRadius={"none"} border={"none"}outline={"none"} focusBorderColor='none'/>
    <Button p={"0"} colorScheme='purple' variant={"ghost"} borderRadius={"0 20px 20px 0"}>
        <AiOutlineSend size={20}/>
    </Button>


    </HStack>
    </VStack>
    <VStack w={'full'} borderLeft={["none", "1px solid white"]} borderRight={["none", "1px solid white"]} >

<Heading textTransform={'uppercase'} textAlign={'center'} textColor={["purple","white"]}>
 video hub
</Heading>
<text> All right reserved</text>
    </VStack>
    <VStack w={"full"}>
        <Heading size={"md"} textTransform={"uppercase"} textColor={["purple","white"]}>
            Social media
        </Heading>
        <Button variant={"link" } colorScheme={"white"}>

    <a  target="_blank" href="http://youtube.com" >youtube </a>
    
        </Button>
        <Button variant={"link" } colorScheme={"white"}>

    <a  target="_blank" href="http://instagram.com">instagram </a>
    
        </Button>
        <Button variant={"link" } colorScheme={"white"}>

    <a  target="_blank" href="http://github.com">github </a>
    
        </Button>

    </VStack>


    </Stack>

   </Box>


  )
}

export default Footer