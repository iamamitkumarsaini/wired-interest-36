import { Box, Center, Container, Heading, Image, List, ListIcon, ListItem, Stack, Text, VStack } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";



function TeamSection () {

    const clr = {color:"#06BAAB", cursor:"pointer"}
     return (
        <Container minW="84%" m="auto" mb="100px">
                <Text fontSize="16px" fontWeight="500" letterSpacing="1px" color="#8B99AD">BUILT FOR EVERY TEAM</Text>

                <Container minW="100%" bg="#fff8f9" border="1px solid #fff8f9" mt="50px">

                    
                <Container minW="100%">
                <Box mb="10px" mt="50px">
                <Stack flexDirection="row" minW="xl">

                    <Center>
                    
                    <Text borderBottom="3px solid #06BAAB" ml="45px" mr="15px" fontWeight="500" color="#06BAAB">Engineering</Text>
                    <Text mt="-7px" mr="18px" color="#06BAAB" fontWeight="900">. . . .</Text>

                    <Text _hover={clr} mr="18px" fontWeight="500">Sales</Text>
                    <Text mr="18px" mt="-7px" fontWeight="900">. . . .</Text>

                    <Text _hover={clr} mr="18px" fontWeight="500">Marketing</Text>
                    <Text  mr="18px" mt="-7px" fontWeight="900">. . . .</Text>

                    <Text _hover={clr} mr="18px" fontWeight="500">Product</Text>
                    <Text mr="18px" mt="-7px" fontWeight="900">. . . .</Text>
                    
                    <Text _hover={clr} mr="18px" fontWeight="500">Client Management</Text>
                    <Text mr="18px" mt="-7px" fontWeight="900">. . . .</Text>

                    <Text  _hover={clr} mr="15px" fontWeight="500">IT</Text>
                    </Center>
                </Stack>
            </Box>
            </Container>

            <Stack minW="100%" flexDirection="row" justify="space-between" mt="25px">

                <VStack minW="45%" mr="10px" align="start" pl="57px" pr="16px">
                    <Box mt="116px">
                    <Heading>Engineering</Heading>
                    </Box>

                    <Box align="start">
                    <Text fontSize="20px">Let go of fragmented tools. Plan, track, and manage your workflows with award-winning ease — in one collaborative workspace.</Text>
                    </Box>

            <Box align="start">

        <List mt="20px" spacing={3}>

            <ListItem>
                <ListIcon as={MdCheckCircle} color='#06BAAB' />
                Real-time progress reporting with Milestones
                </ListItem>

            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Custom development workflows with if/then rules
            </ListItem>

            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Manage issues, bugs, and changes directly in one place
            </ListItem>

        </List>

            </Box>
        </VStack>

                
                <VStack minW="55%">
                    <Box mb="15px">
                        <Image src="https://niftypm.com/_nuxt/img/large@1x.c481d6e.webp"  alt="teams" />
                    </Box>
                </VStack>

            </Stack>
            </Container>
        </Container>
     )
}

export default TeamSection;