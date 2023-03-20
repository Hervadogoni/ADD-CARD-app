import React from 'react'
import {Link, Outlet, Navigate} from 'react-router-dom'
import DashboardSidebar from "../../components/dashboardSidebar/DashboardSidebar"
import "./dashboard.css"

export default function Dashboard({user}) {
    if(!user){
        return <Navigate to="/"/>
    }
    return ( 
        <div className='dashboard'>
            <div className='dashboardHeader'>
                <h1 className="dashboardTitle">Dashboard</h1>
                <Link to="/" className='logoutButton'>
                    <button className="dashboardButton">Logout</button>
                </Link>
            </div>
            <div className="dashboardElement">
                <DashboardSidebar />
                <Outlet/>
            </div>
        </div>
)}
