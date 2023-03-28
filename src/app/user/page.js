'use client'
import NavBar from './NavBar'
import Details from './Details';
import AddDetails from './AddDetails';

export default function User() {
  return (
    <div>
      <NavBar/>
      <div className="user-container">
        <Details/>
      </div>
    <AddDetails/>
   
    </div>
  )
  }
