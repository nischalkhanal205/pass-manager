import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Flex, Heading, Spacer, Stack, Text } from '@chakra-ui/react';
import { db } from '@/Firebase/init-firebase';
import { collection, getDocs} from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

export default function Details() {
  const [userDetails,setuserDetails]=useState([]);
  const [display,setdisplay]=useState('none')
  const [view,setview]=useState('View')
  //extract Data
  useEffect(()=>{
    getDetails()
 },[])

  function getDetails(){
    const Datacollectionref=collection(db,'Nischal');
    getDocs(Datacollectionref)
    .then(response=>{
      const Details=response.docs.map(doc=>({
        data:doc.data(),
        id:doc.id,
      }))
      setuserDetails(Details);
    })
    .catch(error=> console.log(error.message))
 }
  return (
   
     <div align='center'>
      {userDetails.map(userDetail=>
      <div>
          <Card align='center' maxW={'sm'} w={'full'}>
          <CardHeader>
             <Heading size='md'>{userDetail.id}</Heading>
          </CardHeader>
          <CardBody key={userDetail.id} display={display}>
            <Text><b>Email/UserName:</b> {userDetail.data.email}</Text>
            <Text><b>Password: </b>{userDetail.data.password}</Text>
          </CardBody>
          <CardFooter>
            <Button 
            onClick={()=>{
             (display=='none')?  setdisplay(''):setdisplay('none');
             (view=='View')? setview('Hide'):setview('View')
            } } colorScheme='blue'>
               {view} Details
            </Button>
            
          </CardFooter>
        </Card>
        <br/></div>
    )}
   
   
      </div>
      
    
  );
}