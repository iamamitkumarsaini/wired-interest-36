import { Flex, HStack, UnorderedList,ListItem, Text, Container, Box, VStack, Divider, Center, Image } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
function Footer () {

    const footer1 = {color:"#00BAAB", fontSize:"14px", fontWeight:"500", letterSpacing:"3px"};
    const footer2 = {fontSize:"16px", fontWeight:"500", textAlign:"left"};
    const links = {color:"#06A99B", cursor:"pointer"};

    return (

        <Flex w="100%" backgroundColor="#FAF9F6" flexDirection="column">
        <Flex w="82%" m="auto" mt="50px" mb="50px" justify="space-around">


           <VStack w="sm" alignItems="left" spacing={3}>
           <Text textAlign="left" style={footer1}>PRODUCT</Text>
            <Text  _hover={links} style={footer2}>Discussions</Text>
            <Text  _hover={links} style={footer2}>Milestones</Text>
            <Text  _hover={links} style={footer2}>Tasks</Text>
            <Text  _hover={links} style={footer2}>Docs & Files</Text>
            <Text  _hover={links} style={footer2}>Time Tracking</Text>
            <Text  _hover={links} style={footer2}>Reporting</Text>
            <Text  _hover={links} style={footer2}>Project Home</Text>
            <Text  _hover={links} style={footer2}>Project Portfolios</Text>
            </VStack>

            <VStack w="sm"  flexDirection="column" alignItems="left" spacing={3}>
           <Text textAlign="left" style={footer1}>RESOURCES</Text>
            <Text  _hover={links} style={footer2}>Blog</Text>
            <Text  _hover={links} style={footer2}>Change Log</Text>
            <Text  _hover={links} style={footer2}>Integrations</Text>
            <Text  _hover={links} style={footer2}>Apps</Text>
            <Text  _hover={links} style={footer2}>Pricing</Text>
            <Text  _hover={links} style={footer2}>Affiliates</Text>
            </VStack>

            
            <VStack w="sm"  flexDirection="column" alignItems="left" spacing={3}>
           <Text textAlign="left" style={footer1}>TRUST</Text>
            <Text  _hover={links} style={footer2}>Help Center</Text>
            <Text  _hover={links} style={footer2}>Privacy</Text>
            <Text  _hover={links} style={footer2}>Terms of Use</Text>
            <Text  _hover={links} style={footer2}>Security</Text>
            <Text  _hover={links} style={footer2}>Status</Text>
            </VStack>

            <VStack w="sm"  flexDirection="column" alignItems="left" spacing={3}>
           <Text textAlign="left" style={footer1}>MADE FOR</Text>
            <Text  _hover={links} style={footer2}>Agile Development</Text>
            <Text  _hover={links} style={footer2}>Client Management</Text>
            <Text  _hover={links} style={footer2}>Digital Agencies</Text>
            <Text  _hover={links} style={footer2}>Legal Case Management</Text>
            <Text  _hover={links} style={footer2}>Marketing Teams</Text>
            <Text  _hover={links} style={footer2}>Product Teams</Text>
            </VStack>

            <VStack w="sm"  flexDirection="column" alignItems="left" spacing={3}>
           <Text textAlign="left" style={footer1}>COMPARISIONS</Text>
            <Text  _hover={links} style={footer2}>Airtable Alternative</Text>
            <Text  _hover={links} style={footer2}>Asana Alternative</Text>
            <Text  _hover={links} style={footer2}>Basecamp Alternative</Text>
            <Text  _hover={links} style={footer2}>Clarizen Alternative</Text>
            <Text  _hover={links} style={footer2}>ClickUp Alternative</Text>
            <Text  _hover={links} style={footer2}>Confluence Alternative</Text>
            <Text  _hover={links} style={footer2}>Flow Alternative</Text>
            <Text  _hover={links} style={footer2}>Hive Alternative</Text>
            <Text  _hover={links} style={footer2}>JIRA Alternative</Text>
            <Text  _hover={links} style={footer2}>Monday.com Alternative</Text>
            </VStack>

            <VStack w="490px"  flexDirection="column" alignItems="left" spacing={3}>
           <Text textAlign="left" style={footer1}>BLOG</Text>
            <Text  _hover={links} style={footer2}>Why project management is broken (& how to fix it!)</Text>
            <Text  _hover={links} style={footer2}>Why Remote Collaboration is more than just Communication</Text>
            <Text  _hover={links} style={footer2}>Staying on top of your workloads with time tracking</Text>
            <Text  _hover={links} style={footer2}>Best Legal Case Management Software for Law Firms</Text>
            </VStack>
        </Flex>

        <Divider />


        <Flex  w="82%" m="auto" h="90px" justify="space-between">
        <Center>
            <HStack>
                <Box mr="30px">
                <Image src='https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg' alt='Nifty Npm' h="32px" />
                </Box>

                <Box>
                <Text fontSize="15px" fontWeight="600" color="#8B99AD"> 2022 © Nifty Technologies, Inc. All rights reserved.</Text>
                </Box>
                </HStack>
                </Center>

                <Center>
                <HStack spacing={4}>
                    <Box _hover={links}>
                    <FaFacebook size="28px"/>
                    </Box>
                    <Box _hover={links}>
                    <FaInstagram  size="28px" />
                    </Box>
                    <Box _hover={links}>
                    <FaTwitter  size="28px" />
                    </Box>
                </HStack>
                
            
            </Center>
        </Flex>

        </Flex>

        
    )
}

export default Footer;