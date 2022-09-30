import { Box, Button, Center, Container, Divider, Flex, Heading, HStack, Image, Input, Text } from "@chakra-ui/react";
import React, {useState} from "react"

function SignupBox () {

    const gBtn = {color:"#00BAAB", cursor:"pointer"};
    const logo = {cursor:"pointer"};
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value)
      }
  
      const handleClick = () => {
        alert(text);
      }
       

    return (

        <Container minW="100%" bg="#f2f6fb" border="1px solid #f2f6fb">
        <Container minW="48%" border="1px solid #06BAAB" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" zIndex="2" borderRadius="15px" m="auto" mb="30px" bg="white" mt="50px">
           <Center mt="45px" mb="20px"><Box boxSize="50px">
            <Image src="https://niftypm.com/_nuxt/img/nifty-logo-compact.ab551d5.svg" alt="2" />
            </Box></Center>
            <Heading>Get Started Now</Heading>
            <Text pl="80px" pr="100px" pt="20px">It takes less than 2 mins to sign up and create your first project or import your data from anywhere.</Text>





            <Container minW="xl" mt="30px" mb="30px">
        <Box ml="40px">
          <Flex>
       <Center><Input h="50px" minW="lg" ml="-20px" variant="filled" position="relative" flexGrow="2" name="email" type="email" placeholder="name@company.com" value={text} onChange={handleChange} /></Center>
       <Center><Button bg="#00BAAB" color="white" position="absolute" borderRadius="12px" h="38px" ml="-150px" _hover="none" onClick={handleClick}>Get Started</Button></Center>
       </Flex>
       </Box>
       </Container>

       

       <Divider />

       <Container _hover={gBtn} minW="xl" mt="30px" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" borderRadius="8px" mb="5px">
         <Box alignContent="center" p="15px" ml="28%">
            <Flex>
              <Box boxSize="18px" mr="18px">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="google" />
                </Box>
                <Text fontWeight="500" _hover={gBtn}>Sign up with Google</Text>
            </Flex>
          </Box>
       </Container>



       <Container mb="50px">
        <Text color="#6C729C">Free forever. No credit card required.</Text>
       </Container>


        </Container>



        <Container minW="40%">
            <HStack spacing="-2" ml="10px">
                <Image _hover={logo} boxSize="110px" src="https://niftypm.com/_nuxt/img/medal-2651.78561c1.svg" alt="demo" />
                <Image _hover={logo} boxSize="110px" src="https://niftypm.com/_nuxt/img/medal-2671.abe8328.svg" alt="demo" />
                <Image _hover={logo} boxSize="110px" src="https://niftypm.com/_nuxt/img/medal-2659.521cffc.svg" alt="demo" />
                <Image _hover={logo} boxSize="110px" src="https://niftypm.com/_nuxt/img/medal-2696.defc16a.svg" alt="demo" />
                <Image _hover={logo} boxSize="110px" src="https://niftypm.com/_nuxt/img/medal-2640.333478a.svg" alt="demo" />
                <Image _hover={logo} boxSize="110px" src="https://niftypm.com/_nuxt/img/users-love-us.a93e7d7.svg" alt="demo" />
            </HStack>
        </Container>
        </Container>
    )
}

export default SignupBox;