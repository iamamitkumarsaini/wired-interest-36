import React from "react";
import { Box, Button, Center, ChakraProvider, Container, Divider, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaLine } from "react-icons/fa";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function MoreWithDiscussion () {



    return (
         <Container minW="100%" mb="80px">

         <Container mt="80px" minW="82%" mb="85px">

            <Center><Box boxSize="60px" mb="10px" borderRadius="50px" bg="#8dd7ff"><Text p="8px" fontSize="28px" color="white">@</Text></Box></Center>

            <Heading mb="12px" fontSize="52px">Do more with Discussions</Heading>

            <Center><Box maxW="60%"><Text fontSize="24px" color="#6C729C">Discussions meld conversations with action to propel projects with clarity.</Text></Box></Center>

         </Container>


         <Stack maxW="80%" flexDirection="row" m="auto" mb="85px"
         pos="relative"
         h="420px"
         _before={{
           content: '""',
           bgImage:
             "url(https://niftypm.com/_nuxt/img/cloud-decoration.1932f4a.png)",
           bgSize: "cover",
           w:"57%",
           marginLeft:"470px",
           pos: "absolute",
           top: 0,
           right: 0,
           left: 0,
           bottom: 0,
           opacity: 0.9,
           
         }}
        
         >


            <VStack maxW="35%" align="start" textAlign="left" mr="128px">

             <Container mt="145px" ml="30px" pr="60px">
             <Heading mb="10px" fontSize="28px">Share Files</Heading>
               <Text>Access and share files from your Computer, Dropbox, or Google Drive to bring everything project-related together.</Text>
             </Container>

            </VStack>



            <VStack maxW="60%" align="start" pt="75px">
             <Center><Box zIndex="1"><Image src="https://niftypm.com/_nuxt/img/large@1x.32a6702.webp" alt="bgm" /></Box></Center>
            </VStack>
         </Stack>






         <Stack maxW="80%" flexDirection="row" m="auto" mb="85px"
         pos="relative"
         h="415px"
         _before={{
           content: '""',
           bgImage:
             "url(https://niftypm.com/_nuxt/img/cloud-decoration.1932f4a.png)",
           bgSize: "cover",
           w:"57%",
           marginLeft:"40px",
           pos: "absolute",
           top: 0,
           right: 0,
           left: 0,
           bottom: 0,
           opacity: 0.9,
           
         }}
        
         >

              <VStack maxW="60%" align="start" pt="70px" pl="80px" mr="75px">
             <Center><Box zIndex="1"><Image src="https://niftypm.com/_nuxt/img/large@1x.67107a3.webp" alt="bgm" /></Box></Center>
            </VStack>


            <VStack maxW="35%" align="start" textAlign="left">

             <Container mt="130px" ml="30px" pr="60px">
             <Heading mb="10px" fontSize="28px">Create Threads</Heading>
               <Text>Organize your discussions by creating threads -- ideal for answering questions or adding context to messages.</Text>
             </Container>

            </VStack>
         </Stack>






         <Stack maxW="80%" flexDirection="row" m="auto" mb="115px"
         pos="relative"
         h="420px"
         _before={{
           content: '""',
           bgImage:
             "url(https://niftypm.com/_nuxt/img/cloud-decoration.1932f4a.png)",
           bgSize: "cover",
           w:"57%",
           marginLeft:"470px",
           pos: "absolute",
           top: 0,
           right: 0,
           left: 0,
           bottom: 0,
           opacity: 0.9,
           
         }}
        
         >


            <VStack maxW="35%" align="start" textAlign="left" mr="128px">

             <Container mt="120px" ml="30px" pr="60px">
             <Heading mb="10px" fontSize="28px">Turn Discussions into Actions</Heading>
               <Text>Close the gap between communication and action by creating a task directly from project Discussions.</Text>
             </Container>

            </VStack>



            <VStack maxW="60%" align="start">
             <Center><Box pl="30px" zIndex="1"><Image w="85%" src="https://niftypm.com/_nuxt/img/large@1x.fa81781.webp" alt="bgm" /></Box></Center>
            </VStack>
         </Stack>



         <Container pb="85px">
            <HStack>
                <Text fontSize="22px" fontWeight="500">Try Nifty for free, thank us later <ArrowForwardIcon boxSize="40px" color="#06BAAB" /> </Text>
                <Button bg="#00BAAB" color="white" borderRadius="10px" h="55px" pl="30px" pr="30px" _hover="none">Start Free Trial</Button>
            </HStack>
         </Container>


            <Divider />
         </Container>

    )
}

export default MoreWithDiscussion;