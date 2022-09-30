import { useState } from "react";
import { Box, Button, Center, Container, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import { Badge } from '@chakra-ui/react'

function DiscussionPageTop () {

    const [text, setText] = useState("");
    const logo = {cursor:"pointer"};


    const handleChange = (e) => {
        setText(e.target.value)
      }
  
      const handleClick = () => {
        console.log(text);
      }
       

    return (

        <Container minW="100%" bg="#f2f6fb" mb="70px">
            <Box pt="95px" pb="25px">
            <Badge color="white" bg="#8DD7FF" borderRadius="12px" p="1" fontSize="12px" pl="18px" pr="18px" colorScheme="blue">@ Discussions</Badge>
            </Box>

            <Container border="1px solid red">
                <Heading fontSize="36px" mb="10px">Establish knowledge hubs</Heading>
                <Text pl="20px" pr="20px" fontSize="16px" fontWeight="500">Discussions enable focused collaboration amongst project members to facilitate meaningful decision making.</Text>
            </Container>

            
            <Container minW="xl" mt="30px" pb="45px">
                 <Box ml="40px">
                 <Flex>
                 <Center><Input bg="white" h="50px" minW="md" ml="-20px" variant="filled" position="relative" name="email" type="email" placeholder="name@company.com" value={text} onChange={handleChange} /></Center>

                 <Center><Button bg="#00BAAB" color="white" position="absolute" borderRadius="12px" h="38px" ml="-150px" _hover="none" onClick={handleClick}>Get Started</Button></Center>
                 

                 <Box bg="white" _hover={logo} ml="15px" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" boxSize="50px" borderRadius="8px" minW="70px">
                 <Center><Image maxW="25%" mt="16px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" /></Center>

                </Box>
                 </Flex>

                 <Text mt="10px" color="#6C729C">Free forever. No credit card required.</Text>

                 </Box>
            </Container>


        </Container>
    )
}

export default DiscussionPageTop;