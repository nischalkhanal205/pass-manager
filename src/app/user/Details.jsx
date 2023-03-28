import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { db } from "@/Firebase/init-firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import UpdateDetails from "./UpdateDetails";

export default function Details() {
  const [userDetails, setUserDetails] = useState([]);
  const [display, setDisplay] = useState("none");
  const [view, setView] = useState("View");
  const [detailsIndex, setDetailsIndex] = useState(null);
  const [editIndex, seteditIndex] = useState(null);
  const [editdetails, seteditdetails] = useState(false);

  useEffect(() => {
    getDetails();
  }, []);
  useEffect(() => {
    getDetails();
  }, [getDetails]);

  async function getDetails() {
    try {
      const dataCollectionRef = collection(db, "Nischal");
      const response = await getDocs(dataCollectionRef);
      const details = response.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      setUserDetails(details);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div align="center">
      {userDetails.map((userDetail) => (
        <div key={userDetail.id}>
          <Card align="center" maxW={"sm"} w={"full"}>
            <CardHeader>
              <Heading size="md">{userDetail.id}</Heading>
            </CardHeader>
            {detailsIndex === userDetail.id && (
              <CardBody display={display}>
                <Text>
                  <b>Email/UserName:</b> {userDetail.data.email}
                </Text>
                <Text>
                  <b>Password: </b>
                  {userDetail.data.password}
                </Text>
              </CardBody>
            )}
            <CardFooter>
              <Button
                onClick={() => {
                  setDetailsIndex((detailsIndex) =>
                    detailsIndex === userDetail.id ? null : userDetail.id
                  );
                  setDisplay(detailsIndex === userDetail.id ? "none" : "block");
                  setView(detailsIndex === userDetail.id ? "View" : "Hide");
                }}
                colorScheme="blue"
              >
                {view} Details
              </Button>
              <Button
                onClick={() => {
                  seteditIndex((editIndex) =>
                    editIndex === userDetail.id ? null : userDetail.id
                  );
                  // seteditdetails(editIndex === userDetail.id ? true : false);
                }}
              >
                Edit Details
              </Button>
            </CardFooter>
          </Card>
          <br />
          {editIndex === userDetail.id && (
            <UpdateDetails seteditIndex={seteditIndex} userDetail={userDetail} />
          )}
        </div>
      ))}
    </div>
  );
}