import { Badge, Box, Button, Center, Container, Divider, Heading, HStack, Image, Input, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


function SignupPage () {

    const logo = {cursor:"pointer"};
    const navigate = useNavigate()

    const handleClick = () => {

        navigate("/signup/profile");
    }

    return (
        <Container minW="100%" color="white" bgColor="#242432">

           <Heading pt="118px" fontSize="32px" pb="14px">Get started with Nifty</Heading>
           <Text fontSize="15px" fontWeight="500" pb="22px">Over 20,000 teams trust Nifty to empower their project management.</Text>
           <Divider mb="60px" />  

           <Container pl="35px" maxW="lg">

            <HStack spacing="16px" pb="40px">
            <HStack minW="230px" minH="50px" pl="30px"  bgColor="#313345" borderRadius="5px">
                <Image maxW="18px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="google" />
                <Text fontWeight="500" fontSize="15px">Sign up with Google</Text>
            </HStack>

            <HStack minW="250px" minH="50px" pl="30px" bgColor="#313345" borderRadius="5px">
                <Image maxW="18px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png" alt="google" />
                <Text fontWeight="500" fontSize="15px">Sign up with Office 365</Text>
            </HStack>

           
            </HStack>

            <Divider ml="-16px"/>

            <Badge borderRadius="50px" pl="10px" pr="10px" mt="-30px" bgColor="#313345" color="#fff" >OR</Badge>

           </Container>        


           <Container>
          <HStack spacing="21px">
          <Input maxW="380px" name="email" type="email" placeholder="Enter email..." outline="false" bgColor="#242432" color="#8E94BB" borderColor="red" />
          <Button _hover="none" bgColor="#06BAAB" pl="32px" fontSize="16px" pr="32px" borderRadius="4px" onClick={handleClick} >Get Started</Button>
          </HStack>
          <Text textAlign="left" fontSize="16px">Free Forever. No Credit Card Required.</Text>
           </Container>


           <Container bgColor="#242432"
           pos="relative"
           minW="101%"
           _before={{
             content: '""',
             bgImage:
               "url(https://nifty.pm/static/media/waves-large@2x.0f45956af565d8c3dea9.png)",
             bgSize: "cover",
             w:"101.5%",
             marginLeft:"-20px",
             pos: "absolute",
             top: 0,
             right: 0,
             left: 0,
             bottom: 0,
           //   opacity: 0.9,
             
           }}
           > 

             <Center>
            <HStack spacing="-8" ml="10px" pt="55px">
                <Image _hover={logo} boxSize="160px" src="https://niftypm.com/_nuxt/img/medal-2651.78561c1.svg" alt="demo" />
                <Image _hover={logo} boxSize="160px" src="https://niftypm.com/_nuxt/img/medal-2671.abe8328.svg" alt="demo" />
                <Image _hover={logo} boxSize="160px" src="https://niftypm.com/_nuxt/img/medal-2659.521cffc.svg" alt="demo" />
                <Image _hover={logo} boxSize="160px" src="https://niftypm.com/_nuxt/img/medal-2696.defc16a.svg" alt="demo" />
                <Image _hover={logo} boxSize="160px" src="https://niftypm.com/_nuxt/img/medal-2640.333478a.svg" alt="demo" />
                <Image _hover={logo} boxSize="160px" src="https://niftypm.com/_nuxt/img/users-love-us.a93e7d7.svg" alt="demo" />
            </HStack>
            </Center>


            <Center>
            <HStack pt="15px">
                <Box>
                <Image src='https://nifty.pm/images/nifty-logo-compact.svg' alt='Nifty Npm' h="20px" />
                </Box>

                <Box>
                <Text fontSize="12px" fontWeight="600" color="#fff"> 2022 © Nifty Technologies, Inc. All rights reserved.</Text>
                </Box>
                </HStack>
                </Center>

           </Container>

        </Container>
    )
}

export default SignupPage;