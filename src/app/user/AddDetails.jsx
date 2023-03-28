import React, { useState } from "react";
import { db } from "@/Firebase/init-firebase";
import { setDoc, doc } from "firebase/firestore";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function AddDetails() {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const [weblink,setweblink]=useState([]);
  async function add() {
    try {
      await setDoc(doc(db, "Nischal", weblink), data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Heading align="center">Add Details</Heading>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              add();
              setweblink('')
              setdata({email:'',password:''})
            }}
            spacing={4}
          >
            <FormControl id="link">
              <FormLabel>Link</FormLabel>
              <Input value={weblink} onChange={(e)=>setweblink(e.target.value)}  type='text' />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input value={data.email} onChange={(e)=>setdata({email:e.target.value})} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input value={data.password} onChange={(e)=>setdata({...data,password:e.target.value})} type="password" />
            </FormControl>
            <Button type="submit">Add</Button>
          </form>
        </Box>
      </Stack>
    </div>
  );
}
