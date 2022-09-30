import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Center, Container, Divider, Flex, Heading, HStack, Image, Link, Stack, Text } from "@chakra-ui/react";

function SlidePage() {

    const links = {color:"#020202", cursor:"pointer"};
    const clr = {color:"#06BAAB", cursor:"pointer"}



    return (


        <Container minW="100%" >

             <Text mt="90px" mb="50px" letterSpacing="1px" color="#8B99AD" fontWeight="500">SAY GOODBYE TO STATUS MEETINGS</Text>


        <Container minW="84%" m="auto" pt="15px" mb="170px" mt="50px" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" borderRadius="12px" bg="#cdf0ff">

            <Container mb="10px" mt="50px">
                <Stack flexDirection="row" minW="2xl">

                    <Center>
                    
                    <Text borderBottom="3px solid #06BAAB" ml="-40px" mr="15px" fontWeight="500" color="#06BAAB">Roadmaps</Text>
                    <Text mt="-7px" mr="20px" color="#06BAAB" fontWeight="900">. . . .</Text>

                    <Text _hover={clr} mr="15px" fontWeight="500">Tasks</Text>
                    <Text mr="20px" mt="-7px" fontWeight="900">. . . .</Text>

                    <Text _hover={clr} mr="15px" fontWeight="500">Discussions</Text>
                    <Text mr="20px" mt="-7px" fontWeight="900">. . . .</Text>

                    <Text _hover={clr} mr="15px" fontWeight="500">Docs</Text>
                    <Text mr="20px" mt="-7px" fontWeight="900">. . . .</Text>
                    
                    <Text _hover={clr} mr="15px" fontWeight="500">Reporting</Text>
                    </Center>
                </Stack>
            </Container>

            <Container mt="50px" minW="2xl">
                <Heading>Set Goals & Timelines</Heading>
               <Flex>
                <Center><Text p="15px">Set a visual timeline for your big-picture goals and build team alignment by automating progress as tasks are completed. <Link color="#06BAAB">Learn more<ChevronRightIcon boxSize="30px" /></Link></Text></Center>
               <Text color="#06BAAB" position="absolute" ml="595px" mt="48px">   </Text>
               </Flex>
            </Container>

            <Container minW="80%" m="auto">
                <Image src = "https://niftypm.com/_nuxt/img/large@1x.3b50ea1.webp"  alt="discussion"/>
            </Container>
            
            <Divider />

            <Container minW="103%" bg="#ffffff" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" ml="-1.5%" borderRadius="10px" _hover={links} color="#06BAAB">
                <HStack ml="37%" p="12px">
                   <Center><Box boxSize="20px" mr="10px"><Image src="https://niftypm.com/_nuxt/img/nifty-logo-compact.ab551d5.svg" alt="logo" /></Box></Center>
                   <Center><Box><Text fontWeight="500">Try Nifty now. Thank us later <ChevronRightIcon boxSize="27px" /> </Text></Box></Center>
                </HStack>
            </Container>
            </Container>
        </Container>
    )
}

export default SlidePage