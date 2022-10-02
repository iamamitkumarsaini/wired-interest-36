import { Box, Button, Container, Divider, FormControl, FormLabel, Heading, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";


function SignupData () {

    return (
        <Container minW="100%" color="white" bgColor="#242432">

        <Heading pt="118px" fontSize="32px" pb="14px">Welcome! First things first...</Heading>
        <Text fontSize="15px" fontWeight="500" pb="22px">Create a profile to personalize how you'll appear on your workspace.</Text>
        <Divider mb="60px" />

        <Container

        bgColor="#242432"
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


           <Container maxW="sm" ml="40%">

           <FormControl>

           <FormLabel fontSize="14px" color="#CFD0DA">Full Name</FormLabel>
           <Input name="name" type='text' placeholder="Your first & last name..." fontSize="14px" bgColor="#242432" outline="false" />

           <FormLabel fontSize="14px" color="#CFD0DA" mt="18px">Create Password</FormLabel>
           <Input name="name" type='text' placeholder="Minimum 6 characters" fontSize="14px" bgColor="#242432" outline="false" />

           <FormLabel fontSize="14px" color="#CFD0DA" mt="18px">Phone Number</FormLabel>
           <Input name="name" type='text' placeholder="Enter phone number" fontSize="14px" bgColor="#242432" outline="false" />

           {/* <FormLabel fontSize="14px" color="#CFD0DA" mt="18px">Your Role</FormLabel>
           <Select placeholder='Select Work Role' bgColor="#242432" outline="false" color="black" textShadow=" 0 1px 0 rgba(0, 0, 0, 0.4)">
                <option value='productManager' color="green" >Product Manager</option>
                <option value='developer'>Developer</option>
                <option value='designer'>Designer</option>
                <option value='marketingSales'>Marketing & Sales</option>
                <option value='entrepreneur'>Entrepreneur</option>
                <option value='management'>Management / Executive</option>
                <option value='operations'>Operations & HR</option>
                <option value='others'>Others</option>
           </Select> */}
</FormControl>

         <Box>
         <Button ml="40%" minWidth="60%" mt="25px" color="#CFD0DA" bgColor="#06BAAB">Next</Button>
         </Box>

        

           </Container>
           <Text mt="88px" fontSize="12px">By clicking the Next button above, you agree to our Terms of Service and Privacy Policy.</Text>

        </Container>



        </Container>
    )
}

export default SignupData;