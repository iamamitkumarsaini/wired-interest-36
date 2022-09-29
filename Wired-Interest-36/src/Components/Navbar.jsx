import { Container, Flex, HStack, Box, Image, Center, Text, Stack, Button,
  color, Popover, PopoverTrigger, PopoverContent, PopoverArrow, 
  PopoverCloseButton, PopoverHeader, PopoverBody, VStack, List, ListItem, ListIcon,
  OrderedList,UnorderedList, } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDownIcon } from '@chakra-ui/icons'


function Navbar () {

  const loginBtn = {color: "#00BAAB"}; 
  const links = {color:"#06A99B", cursor:"pointer"};
  const signup = {backgroundColor:"#035f57"};



  return (
      <Container maxW="100%"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      position="sticky"
      top="0"
      zIndex="4"
      background="white"
      >
          <Flex h="62px">
           <Center>  
    <Box mr="160px">
      <Link to="/"><Image src='https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg' alt='Nifty Npm'  ml="120px" h="30px" align="center" /></Link>
   </Box>

   <HStack mr="30px">
      <Box>
      <Popover trigger="hover">
      {({ isOpen, onClose }) => (
       <>
<PopoverTrigger>
  <Center><Text fontSize=".95rem" fontWeight="500" _hover={links}>Features <ChevronDownIcon boxSize="20px" /></Text></Center>
</PopoverTrigger>
<PopoverContent boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" bg="#ffffff" width="sm" fontWeight="500">
  <PopoverArrow />
  
  <PopoverHeader color="#DF9100">❤ Learn how Nifty inspires productivity!</PopoverHeader>
  <PopoverBody>
    <Container minW="1200px" alignItems="start">

   <Flex>
    <HStack alignItems="start" mr="40px" ml="-20px">
       <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left">
<ListItem _hover={links}><Link to="/discussion" onClick={onClose}>Discussion</Link></ListItem>
<ListItem onClick={onClose} _hover={links}>Tasks</ListItem>
<ListItem onClick={onClose}  _hover={links}>Time Tracking</ListItem>
<ListItem onClick={onClose}  _hover={links}>Project Home</ListItem>
</UnorderedList>
       </HStack>
       <HStack alignItems="start">
       <UnorderedList listStyleType="none" spacing={1.5} textAlign="left">
<ListItem onClick={onClose} _hover={links}>Milestones (Gantt Chart)</ListItem>
<ListItem onClick={onClose} _hover={links}>Docs & Files</ListItem>
<ListItem onClick={onClose} _hover={links}>Reporting</ListItem>
<ListItem onClick={onClose} _hover={links}>Project Portfolios</ListItem>
</UnorderedList>
       </HStack>
       </Flex>
    </Container>
  </PopoverBody>

</PopoverContent>
</>
      )}
</Popover>
      </Box>
   </HStack>





   <HStack mr="30px">
      <Box>
      <Popover trigger="hover">
      {({ isOpen, onClose }) => (
       <>
<PopoverTrigger>
  <Center><Text fontSize=".95rem" fontWeight="500" _hover={links}>Use Cases <ChevronDownIcon boxSize="20px" /></Text></Center>
</PopoverTrigger>
<PopoverContent boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" bg="#ffffff" width="lg" fontWeight="500">
  <PopoverArrow />
  
  <PopoverHeader fontSize="16px" fontWeight="500" color="#DF9100">❤ Nifty is very flexible. Here are a few examples of how you can use it.</PopoverHeader>
  <PopoverBody>
    <Container alignItems="start">

   <Flex>
    <HStack alignItems="start" mr="40px" ml="-20px">
       <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left" mr="50px">
<ListItem _hover={links}><Link to="/discussion" onClick={onClose}>Agile Development</Link></ListItem>
<ListItem onClick={onClose} _hover={links}>Digital Agencies</ListItem>
<ListItem onClick={onClose}  _hover={links}>Marketing Teams</ListItem>
</UnorderedList>
       </HStack>
       <HStack alignItems="start">
       <UnorderedList listStyleType="none" spacing={1.5} textAlign="left">
<ListItem onClick={onClose} _hover={links}>Client Management</ListItem>
<ListItem onClick={onClose} _hover={links}>Legal Case Management</ListItem>
<ListItem onClick={onClose} _hover={links}>Product Teams</ListItem>
</UnorderedList>
       </HStack>
       </Flex>
    </Container>
  </PopoverBody>

</PopoverContent>
</>
      )}
</Popover>
      </Box>
   </HStack>







   <HStack mr="30px">
      <Box>
      <Popover trigger="hover">
      {({ isOpen, onClose }) => (
       <>
<PopoverTrigger>
  <Center><Text fontSize=".95rem" fontWeight="500" _hover={links}>Resources<ChevronDownIcon boxSize="20px" /></Text></Center>
</PopoverTrigger>
<PopoverContent boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" bg="#ffffff" width="sm" fontWeight="500">
  <PopoverArrow />

  <PopoverBody>
    <Container minW="1200px" alignItems="start">

   <Flex>
    <HStack alignItems="start" mr="40px" ml="-20px">
       <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left">
<ListItem _hover={links}><Link to="/discussion" onClick={onClose}>Apps</Link></ListItem>
<ListItem onClick={onClose} _hover={links}>Integrations</ListItem>
<ListItem onClick={onClose}  _hover={links}>Security</ListItem>
</UnorderedList>
       </HStack>
       <HStack alignItems="start">
       <UnorderedList listStyleType="none" spacing={1.5} textAlign="left">
<ListItem onClick={onClose} _hover={links}>Blog</ListItem>
<ListItem onClick={onClose} _hover={links}>Help Center</ListItem>
<ListItem onClick={onClose} color="#06A99B">Get a Demo</ListItem>
</UnorderedList>
       </HStack>
       </Flex>
    </Container>
  </PopoverBody>

</PopoverContent>
</>
      )}
</Popover>
      </Box>
   </HStack>







   <HStack mr="30px">
      <Box>
      <Center><Text fontSize=".95rem" fontWeight="500" _hover={links}>Got Clients?</Text></Center>
      </Box>
   </HStack>

   <HStack mr="30px">
      <Box>
      <Center><Text fontSize=".95rem" fontWeight="500" _hover={links}>Pricing</Text></Center>
      </Box>
   </HStack>

   <HStack mr="140px">
      <Box>
      <Center><Text fontSize=".95rem" fontWeight="500" _hover={links} color="#06A99B">Got a Demo</Text></Center>
      </Box>
   </HStack>


   <Stack mr="20px">
   <Button bg="white" size='sm' paddingX="22px" variant="ghost" _hover={loginBtn} boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
  Login
</Button>
   </Stack>

   <Stack>
   <Button bg='#00BAAB' size='sm' paddingX="22px" color="white" borderRadius="10px" _hover={signup}>
  Sign Up
</Button>
   </Stack>

   </Center>
          </Flex>
      </Container>
  )
}

export default Navbar;