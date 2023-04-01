import { db } from '@/Firebase/init-firebase';
import { Button } from '@chakra-ui/react';
import { deleteDoc,doc } from 'firebase/firestore';
import React from 'react'
import {FaTrash} from 'react-icons/fa'

export default function DeleteDetails({userDetail}) {
    async function deletedetails() {
        try {
          await deleteDoc(doc(db, "Nischal",userDetail.id));
        } catch (error) {
          console.log(error.message);
        }
      }
    return (
    <div>
        <Button onClick={deletedetails}>
            <FaTrash/>
        </Button>
        
    </div>
  )
}
