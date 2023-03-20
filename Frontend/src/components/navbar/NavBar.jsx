import React from 'react'
import {Link} from "react-router-dom"
import "./navbar.css"

export default function NavBar() {
  return (
    <div className="navbar">
        <Link className="navLink"to="/"><h2>Add Card</h2></Link>
        <Link className="navLink" to="/login"><button className='navbarButton'>Login</button></Link>
    </div>
  )
}
