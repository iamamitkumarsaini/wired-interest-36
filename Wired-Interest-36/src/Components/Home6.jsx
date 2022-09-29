import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";

function Unification () {

    return (

        <Container minW="84%" m="auto" mb="170px">
            <Text fontSize='15px' fontWeight="600" color="#8B99AD" letterSpacing="2px">POWERFUL UNIFICATION</Text>

            <Container minW="100%" bg="rgba(204,240,235,0.25)" mt="50px" borderRadius="20px">
            <Stack minW="100%" flexDirection="row" justify="space-between" mt="25px">

<VStack minW="45%" mr="10px" align="start" pl="30px" pr="24px">
    <Box mt="70px">
    <Heading>It’s so easy to be efficient</Heading>
    </Box>

    <Box align="start">
    <Text fontSize="20px">Team alignment, productivity, & smarter decisions come naturally when your data is not fragmented across multiple tools.</Text>
    </Box>

<Box align="start" pt="15px" pl="32px">
<Heading fontSize="24px">Import into Nifty</Heading>
</Box>

<Box align="start" pt="15px" pl="32px">
<Heading fontSize="24px">Native Integrations</Heading>
</Box>

<Box align="start" pt="15px" pl="32px">
<Heading fontSize="24px">Workflow Automations</Heading>
</Box>

<Box align="start" pl="32px" pr="21px">
<Text>Let Nifty take care of your busy work with custom if/then automations so you can save time & focus on things that really matter.</Text>
</Box>

<Box align="start" pt="10px" pl="32px" pr="21px">
<Text color="#06BAAB"><Link>See all integrations <ChevronRightIcon boxSize="25px" /></Link></Text>
</Box>

<Box align="start" pt="15px" pl="32px">
<Heading fontSize="24px">Custom Embeds</Heading>
</Box>


</VStack>


<VStack minW="55%">
    <Box mb="50px">
        <Image src="/Images/Workplaces.png" alt="teams" />
    </Box>
</VStack>

</Stack>
            </Container>
        </Container>
    )
}

export default Unification;

