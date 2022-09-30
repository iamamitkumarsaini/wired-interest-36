import { AspectRatio, Box, Center, useDisclosure, Container, Flex, Image, Modal, ModalBody, ModalContent, ModalOverlay, Text, Heading, Input, Button, Divider } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import React, {useState} from "react"

function VideoTag () {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
    const amit = {backgroundColor:"#00BAAB", color:"white",cursor:"pointer"};
    const [text, setText] = useState("");
    const gBtn = {color:"#00BAAB", cursor:"pointer"};


    const handleChange = (e) => {
      setText(e.target.value)
    }

    const handleClick = () => {
      alert(text);
    }
      

    return (
        <Flex bg="#F8F8F8" flexDirection="column" mb="80px">
        <Container  minW="-webkit-fit-content" borderRadius="16px" bg="#F0F0F0" mt="25px">
            <Box>
                <Center><Image position="relative" minW="748px" maxH="280px" m="16px auto" src="https://niftypm.com/_nuxt/img/large@1x.8a3e5ad.webp" alt="hover_on" /></Center>
            </Box>
            <Box ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>
      </Box>

      <Box><Center w="100px" h="100px" bg="white" position="absolute" _hover={amit}  color="#00BAAB" borderRadius="50px" mt="-200px" ml="320px" fontSize="32px"><FaPlay onClick={onOpen} /></Center></Box>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minW="848px" minH="465px" mt="146px">
          <ModalBody >
          {/* <AspectRatio ratio={16 / 9}>
                <iframe width="848" minHeight="460" src="https://www.youtube.com/embed/5GaV5EZX22o" 
                title="YouTube video player" style={links}></iframe>
                </AspectRatio> */}


          <Box
          as="iframe"
          src="https://www.youtube.com/embed/5GaV5EZX22o?autoplay=1"
          width="100%"
          allow="autoplay"
          sx={{aspectRatio:"16/9"}}
          >

          </Box>



          </ModalBody>
        </ModalContent>
      </Modal>
            <Box><Center><Text position="absolute" letterSpacing="1px" color="#00BAAB" fontWeight="500" mt="-120px">INTRODUCING</Text></Center></Box>
        </Container>


       <Container minW="2xl" mt="20px">
        <Center>
        <Box>
          <Flex>
          <Heading fontSize="40px">The ultimate project management</Heading>
          <Center ml="10px"><Image h="30px" src="https://niftypm.com/_nuxt/img/large@1x.639e4a2.webp" alt="os" /></Center>
          </Flex>
        </Box>
        </Center>

        <Box mt="12px">
          <Text>Stop switching between Roadmaps, Tasks, Docs, Chats, & other tools.</Text>
          <Text>Nifty is one app to unite teams, goals, and actions in one place.</Text>
        </Box>
        
        
       </Container>


       <Container minW="2xl" mt="20px" mb="15px">
        <Box ml="40px">
          <Flex>
       <Center><Input h="60px" minW="xl" pr="160px" variant="filled" position="relative" flexGrow="2" name="email" type="email" placeholder="name@company.com" value={text} onChange={handleChange} /></Center>
       <Center><Button bg="#00BAAB" color="white" position="absolute" borderRadius="12px" h="35px" ml="-150px" _hover="none" onClick={handleClick}>Get Started</Button></Center>
       </Flex>
       </Box>
       </Container>

       <Divider />

       <Container _hover={gBtn} minW="xl" mt="20px" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" borderRadius="8px" mb="10px">
         <Box alignContent="center" p="15px" ml="28%">
            <Flex>
              <Box boxSize="18px" mr="18px">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="google" />
                </Box>
                <Text fontWeight="500" _hover={gBtn}>Sign up with Google</Text>
            </Flex>
          </Box>
       </Container>

       <Container mb="25px">
        <Text color="#6C729C">Free forever. No credit card required.</Text>
       </Container>

        </Flex>

        
    )
}

export default VideoTag;










{/* <AspectRatio maxW='560px' ratio={2}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/5GaV5EZX22o" 
                title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </AspectRatio> */}



                 {/* <Container minW="2xl">
        <Box
        pos="relative"
        minW="sm"
        minH="400px"
        _before={{
          content: '""',
          bgImage:
            "	https://niftypm.com/_nuxt/img/cloud-decoration.1932f4a.png",
          bgSize: "cover",
          pos: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          opacity: 1.3
        }}
      >
     <Box> <Center>
      <Image position="absolute" mt="440px" src="https://niftypm.com/_nuxt/img/large@1x.32a6702.webp" alt="pop" />
      </Center></Box>
      </Box>
        </Container> */}