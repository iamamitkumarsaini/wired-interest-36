import { Badge, Box, Center, Container, Heading, HStack, Image, Stack, Text, VStack, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Button, Divider, } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useState} from "react"



function LoginPage () {

    const [loginObj, setLoginObj] = useState({email:"", password:""});

    let arr = JSON.parse(localStorage.getItem("SignupDetails")) || []
    const {email,password} = loginObj;
   

      let flag=false;

    const LoginFunc = () => {
    
        arr.filter((elem) => {
            if (loginObj.email==elem.email && loginObj.password==elem.password){
    
                
                flag=true;
            }
           
        })

        if(flag){
            alert("loginSuccessfull")
            navigate("/")
        }

        else{
            alert("Login Failed")
        }
    }
   


    const signupBtn = {color:"#06BAAB"}
    const hoverEffect = {cursor:"pointer",textDecoration:"underline"};
    const navigate = useNavigate()

    const handleLoginData = (e) => {
        const {name,value} = e.target

        setLoginObj({...loginObj, [name]:value})
    }

    const handlSignup = () => {
        navigate("/signup")
        
      
    }

    const loginSubmit = () => {
        // navigate("/")
        console.log(loginObj)
        LoginFunc()
    }










    
    

    return <Container
         minW="100%"
         minH="100vh"
         bgColor="#242432"
         bgImage="url(https://nifty.pm/static/media/waves-large@2x.0f45956af565d8c3dea9.png)"
         pos="relative"
         >

       
    <Center pt="37px" pb="37px"><Link to="/"><Image maxW="98px" src="https://nifty.pm/static/media/nifty-logo-light.0fec47865af527cee10595b3ab95858a.svg" alt="logo" /></Link></Center>
      

        

            <Stack minH="lg" maxW="63.5%" m="auto" flexDirection="start">

            <VStack pt="38px" maxW="50%" align="left" pl="38px" pr="30px" bgColor="#242432">
                <HStack>
                    <Badge color="white" bgColor="#fab35c" borderRadius="50px" fontSize="11px" p="2px" pl="6px" pr="6px">COMING SOON</Badge>
                    <Text fontWeight="500" color="white">Reporting Dashboard</Text>
                </HStack>


            <Text pb="15px" fontSize="16px" textAlign="left" color="white">Powerful reporting to keep you on top of your business and workload. Customize your dashboard to gain insights and make informed decisions.</Text>
            <Image pr="10px" src="https://nifty.pm/static/media/main.9818dcc508e7ef1f7d96.png" alt="" />
            </VStack>



            <VStack pt="32px" minW="50%" align="left" pl="38px" pr="38px" bgColor="#303345">

                <Heading mb="12px" align="left" color="White" fontSize="22px">Log in to your account</Heading>

                <FormControl color="#CFD0DA" pb="14px" >
                   <FormLabel fontSize="15px">Email address *</FormLabel>
                   <Input border="none" outline="disabled" borderRadius="5px" fontSize="15px" bgColor="#242432" name="email"
                    type='email' placeholder="name@company.com"
                    value={email}
                    onChange={handleLoginData}
                    />
                   

                  <HStack mt="20px" justify="space-between">
                  <FormLabel fontSize="15px">Password *</FormLabel>
                  <FormLabel pb="9px" fontSize="14px" color="#8E94BB" >Forget Password?</FormLabel>
                  </HStack>
                  <Input border="none" outline="false" borderRadius="5px" fontSize="15px" bgColor="#242432" 
                  name="password" type='password' placeholder="Password" 
                  value={password}
                    onChange={handleLoginData}
                  />
                </FormControl>

                <Button  fontWeight="500" fontSize="16px" bg="#06BAAB" color="#fff" _hover="none"
                disabled = {!email.includes("@")  || !email.includes(".co") || password.length<6}
                onClick={loginSubmit}
                > Log in</Button>

                <HStack pt="15px" justify="center" color="#F57D2C">
                  
                   <Image maxW="18px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" />
                   <Link to="#"><Text fontSize="16px" _hover={hoverEffect}>Sign in With Google</Text></Link>
                  
                </HStack>

                <Text pb="15px" color="#fff" fontSize="16px" pt="8px" fontWeight="500" _hover={hoverEffect}>Sign in with SSO</Text>
                <Divider color="white"/>

                <Center><Badge mt="-20px" minW="40px" borderRadius="50px">OR</Badge></Center>

                <Text pb="6px" fontSize="16px" fontWeight="500" color="white">Don't have an account?</Text>

                <Center><Button onClick={handlSignup} fontSize="15px" _hover={signupBtn} minW="170px" borderRadius="5px" bg="#242432" color="white" maxH="40px">Sign up for free</Button></Center>

            </VStack>

            </Stack>
     
           
    </Container>
}

export default LoginPage;