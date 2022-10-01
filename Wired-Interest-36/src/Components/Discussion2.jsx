import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Center, Container, Divider, Flex, Heading, HStack, Image, Link, Stack, Text } from "@chakra-ui/react";

function FacilitesSection () {

    const links = {color:"#020202", cursor:"pointer"};
    const clr = {color:"#06BAAB", cursor:"pointer"};


    return (


       

        <Container minW="81%" bg="#fff8f9 " m="auto" pt="15px" mb="170px" mt="50px" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" borderRadius="18px">

            <Container mb="10px" mt="50px">
                <Stack flexDirection="row" minW="md">

                    <Center>
                    
                    <Text borderBottom="3px solid #06BAAB" ml="25px" mr="15px" fontWeight="500" color="#06BAAB">Facilitate Ideas</Text>
                    <Text mt="-7px" mr="20px" color="#06BAAB" fontWeight="900">. . . .</Text>

                    <Text _hover={clr} mr="15px" fontWeight="500">Take Actions</Text>
                    <Text mr="20px" mt="-7px" fontWeight="900">. . . .</Text>

                    <Text _hover={clr} mr="15px" fontWeight="500">Stay Connected</Text>
                    </Center>
                </Stack>
            </Container>

            <Container mt="50px" minW="xl">
                <Heading>Facilitate Ideas</Heading>
               <Flex>

                <Center><Text mt="10px" mb="32px">Discussions enable real-time collaboration amongst project members to share ideas, collect feedback, and take 
                    meaningful decisions.</Text></Center>

               </Flex>
            </Container>

            <Container minW="xl">
                <Image src = "https://niftypm.com/_nuxt/img/large@1x.0e4d758.webp"  alt="discussion"/>
            </Container>
            
            <Divider />

            <Container minW="103.5%" bg="#ffffff" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" ml="-1.5%" _hover={links} color="#06BAAB" borderBottomRadius="18px">
                
            <Center><HStack p="12px">
                   <Box boxSize="20px" mr="10px"><Image src="https://niftypm.com/_nuxt/img/nifty-logo-compact.ab551d5.svg" alt="logo" /></Box>
                  <Box><Text fontWeight="500">Get Started<ChevronRightIcon boxSize="27px" /> </Text></Box>
                </HStack></Center>
            </Container>
            </Container>

            
    )
   
    
}

export default FacilitesSection;