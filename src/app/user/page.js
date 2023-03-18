'use client'
import NavBar from './NavBar'
import Details from './Details';

export default function User() {
  return (
    <div>
      <NavBar/>
      <div className="user-container">
        <Details/>
      </div>

    </div>
  )
  }
