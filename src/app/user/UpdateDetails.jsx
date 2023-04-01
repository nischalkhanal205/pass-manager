import React, { useState } from "react";
import { db } from "@/Firebase/init-firebase";
import { setDoc, doc, updateDoc } from "firebase/firestore";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

export default function UpdateDetails({ seteditIndex, userDetail }) {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const weblink = userDetail.id;
  async function update() {
    try {
      // await setDoc(doc(db, "Nischal", weblink), data);
      await updateDoc(doc(db, "Nischal", weblink), data);
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
          <Heading align="center">Edit Details</Heading>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              update();
              seteditIndex(false)
            }}
            spacing={4}
          >
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                value={data.email}
                onChange={(e) => setdata({ email: e.target.value })}
                type="email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                value={data.password}
                onChange={(e) => setdata({ ...data, password: e.target.value })}
                type="password"
              />
            </FormControl>
            <Button type="submit">
              Edit
            </Button>
          </form>
        </Box>
      </Stack>
    </div>
  );
}
