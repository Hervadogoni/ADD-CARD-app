import React from 'react'
import NavBar from "../../components/navbar/NavBar"
import {Outlet} from "react-router-dom"
import "./sharedLayout.css"

export default function SharedLayout() {
  return (
    <div className="sharedLayout">
        <NavBar/>
        <Outlet />
    </div>
  )
}
