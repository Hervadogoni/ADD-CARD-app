import React from 'react'
import { Link } from 'react-router-dom'
import "./dashboardSidebar.css"

export default function DashboardSidebar() {
  return (
    <div className='dasboardSidebar'>
        <Link to="/dashboard"className='sidebarLink'>
            <h3>Create</h3>
        </Link>
        <Link to="/dashboard/update" className="sidebarLink">
            <h3>Update</h3>
        </Link>
        <Link to="/dashboard/delete" className='sidebarLink'>
            <h3>Delete</h3>
        </Link>
    </div>
  )
}
