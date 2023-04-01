import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FaTrash, FaEye, FaEdit } from "react-icons/fa";
import { db } from "@/Firebase/init-firebase";
import { collection, getDocs, deleteDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import UpdateDetails from "./UpdateDetails";
import DeleteDetails from "./DeleteDetails";

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
  // delete functions

  return (
    <div
      align="center"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
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
                mr={5}
                onClick={() => {
                  setDetailsIndex((detailsIndex) =>
                    detailsIndex === userDetail.id ? null : userDetail.id
                  );
                  setDisplay(detailsIndex === userDetail.id ? "none" : "block");
                  setView(detailsIndex === userDetail.id ? "View" : "Hide");
                }}
                colorScheme="blue"
              >
                <FaEye />
              </Button>
              <Button
                mr={5}
                onClick={() => {
                  seteditIndex((editIndex) =>
                    editIndex === userDetail.id ? null : userDetail.id
                  );
                  // seteditdetails(editIndex === userDetail.id ? true : false);
                }}
              >
                <FaEdit />
              </Button>
              <DeleteDetails userDetail={userDetail} />
            </CardFooter>
          </Card>
          <br />
          {editIndex === userDetail.id && (
            <UpdateDetails
              seteditIndex={seteditIndex}
              userDetail={userDetail}
            />
          )}
        </div>
      ))}
    </div>
  );
}
