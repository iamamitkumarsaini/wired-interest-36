import { Box, Container, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledSlider } from "./StyledSlider";

function RotatingDIvs () {

    const img = {cursor:"pointer"};


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200,
        pauseOnHover: false,
        speed:3000,
        
      };

      const settings1 = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200,
        pauseOnHover: false,
        speed:3000,
        rtl:true
      };




    return (
        <Container minW="100%" mb="140px">

            <Container minW="86%" mb="52px">
                <Stack flexDirection="row" justify="space-between">
                    <VStack maxW="46%" align="start" alignItems="start">
                        <Box>
                            <Text fontSize="15px" fontWeight="500" color="#06BAAB" letterSpacing="1px">DON’T TAKE OUR WORD FOR IT</Text>
                        </Box>

                        <Box>
                            <Heading fontSize="43px" textAlign="left">Nifty is acclaimed for its
design and performance ✨</Heading>
                        </Box>
                    </VStack>

                    <VStack width="30%" align="flex-end" alignSelf="end">
                      <Box>
                      <Image _hover={img} src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=330952&theme=light" alt="Products" />
                      </Box>
                    </VStack>
                </Stack>
            </Container>


            <Container minW="100%">

            <StyledSlider {...settings}>

                    <Image src="/Images/Image1.png" alt="1" />
                    <Image src="/Images/Image2.png" alt="1" />
                    <Image src="/Images/Image3.png" alt="1" />
                    <Image src="/Images/Image4.png" alt="1" />
                    <Image src="/Images/Image5.png" alt="1" />
                    <Image src="/Images/Image6.png" alt="1" />
                    <Image src="/Images/Image7.png" alt="1" />
                    <Image src="/Images/Image8.png" alt="1" />

      </StyledSlider>


            </Container>


            <Container minW="100%">

<StyledSlider {...settings1}>

        <Image src="/Images/Image1.png" alt="1" />
        <Image src="/Images/Image2.png" alt="1" />
        <Image src="/Images/Image3.png" alt="1" />
        <Image src="/Images/Image4.png" alt="1" />
        <Image src="/Images/Image5.png" alt="1" />
        <Image src="/Images/Image6.png" alt="1" />
        <Image src="/Images/Image7.png" alt="1" />
        <Image src="/Images/Image8.png" alt="1" />

</StyledSlider>


</Container>


        </Container>
    )
}

export default RotatingDIvs;