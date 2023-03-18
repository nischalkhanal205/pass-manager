import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Heading, Spacer, Stack, Text } from '@chakra-ui/react';
import { db } from '@/Firebase/init-firebase';
import { collection, getDocs} from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

export default function Details() {
  const [userDetails,setuserDetails]=useState([]);
  const [display,setdisplay]=useState('none')
  
 

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
        <Card align='center' maxW={'md'} w={'full'}>
          <CardHeader>
             <Heading size='md'> {userDetail.id}</Heading>
          </CardHeader>
          <CardBody key={userDetail.id} display={display}>
            <Text><b ml={5}>Email/UserName:</b> {userDetail.data.email}</Text>
            <Text><b ml={5}>Password: </b>{userDetail.data.password}</Text>
          </CardBody>
          <CardFooter>
            <Button onClick={()=> setdisplay('')} colorScheme='blue'>View Details</Button>
          </CardFooter>
        </Card>
  <br/></div>
    )}
      </div>
      
    
  );
}