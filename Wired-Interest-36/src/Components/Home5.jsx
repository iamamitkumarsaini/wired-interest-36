import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Center, Container, Image, Link, Text } from "@chakra-ui/react";


 function Colorful () {

    return (

        <Container minW="100%" bg="#f2f6fb" border="1px solid #f2f6fb" mb="180px">

            <Container minW="70%" mt="80px" mb="40px">
            <Center><Image minW="100%" src="/Images/Colorful_logo.png" alt="colorful" /></Center>
            </Container>

            <Text pb="80px"><Link fontSize="20px" fontWeight="500" color="#06BAAB">Read more Nifty reviews on G2 <ChevronRightIcon boxSize="25px" /> </Link></Text>
        </Container>
    )
 }

 export default Colorful

//  https://i.ibb.co/7XnyfHC/Colorful-logo.png