import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Button,IconButton, useColorMode, Switch,Image } from '@chakra-ui/react'
import NextLink from "next/link"
import { useState } from 'react';


export default function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const [display,changedisplay]=useState('none');
  return (
    <Flex>
       <Flex
       m={10}
         top='1rem'
         right='1rem'
         align='center'>
         <Image src={`/logo.png`} width={100} height={50}/>
         </Flex>
        
      <Flex
         pos="absolute"
         top='1rem'
         right='1rem'
         align='center' >  
        
            <Flex
           >
                <NextLink href="/" passHref>
                    <Button 
                    as="a"
                    variant="ghost"
                    aria-label="SignUp"
                    my={5}
                    w="100%"
                    _hover={{ bg: "blue.500", color: " white" }}>
                        SignOut
                    </Button>
                </NextLink>
                <Switch onChange={toggleColorMode}/>
           </Flex>
          
            
        </Flex>
        
     
        
        
    </Flex>
  )
}