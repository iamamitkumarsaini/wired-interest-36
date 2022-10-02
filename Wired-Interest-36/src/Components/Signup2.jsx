import { Box, Button, Container, Divider, FormControl, FormLabel, Heading, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
// import axios from "axios";


  //  const takeUserData = async(obj) => {

  //   try {
  //     let res = await axios.post(`http://localhost:3004/userprofile`,obj)
  //     return res
  //   } 
    
  //   catch (error) {
  //    console.log("error",error); 
  //   }
  //  }


function SignupData () {

  const navigate = useNavigate();
  const {obj,setObj} = useContext(AuthContext);
  const [name,setName] = useState("")
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  let arr = JSON.parse(localStorage.getItem("SignupDetails")) || []

// const userData = async (obj) => {

//   try {
    
//     let res = await takeUserData(obj) 
//     console.log(res)
//   } 
  
//   catch (error) {
//    console.log() 
//   }
// }

  const submitSignup = () => {

    obj.name=name;
    obj.password=password;
    obj.number=number;

    setName("")
    setPassword("")
    setNumber("")


  navigate("/login")

  arr.push(obj);

  localStorage.setItem("SignupDetails", JSON.stringify(arr))

  // userData(obj)


  }

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
           <Input name="name" type='text' placeholder="Your first & last name..." fontSize="14px" bgColor="#242432" outline="false"
           value={name}
           onChange={(e) => setName(e.target.value) }
           />

           <FormLabel fontSize="14px" color="#CFD0DA" mt="18px">Create Password</FormLabel>
           <Input name="name" type='password' placeholder="Minimum 6 characters" fontSize="14px" bgColor="#242432" outline="false"
            value={password}
            onChange={(e) => setPassword(e.target.value) } />

           <FormLabel fontSize="14px" color="#CFD0DA" mt="18px">Phone Number</FormLabel>
           <Input name="name" type='number' placeholder="Enter 10 digits phone number" fontSize="14px" bgColor="#242432" outline="false"
            value={number}
            onChange={(e) => setNumber(e.target.value) } />

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
         <Button ml="40%" minWidth="60%" mt="25px" color="#CFD0DA" bgColor="#06BAAB"
         disabled={name=="" || password=="" || password.length<6 || number=="" || number.length!==10}
         onClick={submitSignup}>Sign Up</Button>
         </Box>

        

           </Container>
           <Text mt="88px" fontSize="12px">By clicking the Next button above, you agree to our Terms of Service and Privacy Policy.</Text>

        </Container>



        </Container>
    )
}

export default SignupData;