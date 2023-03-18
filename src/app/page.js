'use client'
import NavBar from "@/components/NavBar";
import { SimpleGrid, Box, useMediaQuery, Text, Button } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  const [isNotSmallerscreen]=useMediaQuery("(min-width:768px)")
  return (
    <div>
    <NavBar/>
   <SimpleGrid 
   m='50px' 
   minChildWidth={isNotSmallerscreen?"450px":""} 
   columns={2}
   align="center"
   >
        <Box
        m='30px' >
          <Text as="b" fontSize="3xl">Secure your online world with ease - let our password
           manager handle the keys!</Text><br/><br/><br/>
          <Text fontSize='2xl'>"Experience peace of mind with our password manager - 
          securely store, generate and manage your passwords all in one place. 
          Protect your digital identity and simplify your life today!"</Text> <br/><br/><br/>
          <Button as="a" href="/signin" colorScheme={"purple"} mr="10px">Sign In</Button>
          <Button as="a" href="/signin"colorScheme={"purple"}>Sign Up</Button>
        </Box>
        <Box pt={20}>
          <Image src={`/computer-pass.webp`} width={isNotSmallerscreen?"380":"450"} height={500} />
        </Box>
      </SimpleGrid>

    </div>
  

   
   
  )
}
