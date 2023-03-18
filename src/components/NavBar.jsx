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
            display={['none','none','flex','flex']}>
            <NextLink href="/" passHref>
                    <Button 
                    as="a"
                    variant="ghost"
                    aria-label="Home"
                    my={5}
                    w="100%"
                    _hover={{ bg: "blue.500", color: " white" }}>
                        Home
                    </Button>
                </NextLink>
                <NextLink href="/about" passHref>
                    <Button 
                    as="a"
                    variant="ghost"
                    aria-label="About"
                    my={5}
                    w="100%"
                    _hover={{ bg: "blue.500", color: " white" }}>
                        About
                    </Button>
                </NextLink>
                <NextLink  href="mailto:nischalkhanal105@gmail.com" passHref>
                    <Button 
                    as="a"
                   
                    variant="ghost"
                    aria-label="Contact"
                    my={5}
                    w="100%"
                    _hover={{ bg: "blue.500", color: " white" }}>
                        Contact
                    </Button>
                </NextLink>
                <NextLink href="/signin" passHref>
                    <Button 
                    as="a"
                    variant="ghost"
                    aria-label="SignIn"
                    my={5}
                    w="100%"
                    _hover={{ bg: "blue.500", color: " white" }}>
                        SignIn
                    </Button>
                </NextLink>
                <NextLink href="/signup" passHref>
                    <Button 
                    as="a"
                    variant="ghost"
                    aria-label="SignUp"
                    my={5}
                    w="100%"
                    _hover={{ bg: "blue.500", color: " white" }}>
                        SignUp
                    </Button>
                </NextLink>
                <Switch onChange={toggleColorMode}/>
           </Flex>
            <IconButton
            aria-label='open menu'
            size="lg"
            mr={2}
            icon={<HamburgerIcon/>}
            display={['flex','flex','none','none']}
            onClick={()=> changedisplay('flex')}
            />
            
        </Flex>
        
        <Flex 
        w='100vw'
        bg="gray"
        zIndex={20}
        h='100vh'
        pos='fixed'
        top='0'
        left='0'
        overflow='auto'
        flexDir='column'
        display={display}
        >
            <Flex justify='flex-end'>
                <IconButton
                
                mt={2}
                mr={2}
                aria-label="Close Menu"
                size="lg"
                icon={<CloseIcon/>}
                onClick={()=> changedisplay('none')}
                />
            </Flex>
           <Flex 
            flexDir='column'
            align='center'
            >
            <NextLink href="/" passHref>
                    <Button 
                    as="a"
                    variant="ghost"
                    aria-label="Home"
                    my={5}
                    w="100%">
                        Home
                    </Button>
                </NextLink>
                <NextLink href="/about" passHref>
                    <Button 
                    as="a"
                    variant="ghost"
                    aria-label="About"
                    my={5}
                    w="100%">
                        About
                    </Button>
                </NextLink>
                <NextLink href="/contact" passHref>
                    <Button 
                    as="a"
                    variant="ghost"
                    aria-label="Contact"
                    my={5}
                    w="100%">
                        Contact
                    </Button>
                </NextLink>
                <NextLink href="/signin" passHref>
                    <Button 
                    as="a"
                    variant="ghost"
                    aria-label="SignIn"
                    my={5}
                    w="100%"
                    _hover={{ bg: "blue.500", color: " white" }}>
                        SignIn
                    </Button>
                </NextLink>
                <NextLink href="/signup" passHref>
                    <Button 
                    as="a"
                    variant="ghost"
                    aria-label="SignUp"
                    my={5}
                    w="100%"
                    _hover={{ bg: "blue.500", color: " white" }}>
                        SignUp
                    </Button>
                </NextLink>
            </Flex> 
        </Flex>
        
        
    </Flex>
  )
}