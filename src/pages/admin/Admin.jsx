import React, { useState } from 'react'
import './Admin.scss'
import { FaArrowLeftLong } from "react-icons/fa6"
import { Link, NavLink, Outlet } from 'react-router-dom'
import { MdOutlineDashboardCustomize } from "react-icons/md"
import { RiEdit2Line } from "react-icons/ri"
import { RxHamburgerMenu } from "react-icons/rx";

const Admin = () => {

  let [burger, setBurger] = useState(false)

  return (
    <div className="admin">
      <div className={`sidebar ${burger ? 'show' : ''}`}>
        <span>
          <button onClick={() => setBurger( p => !p)}>
            {
              burger ? <FaArrowLeftLong /> : <RxHamburgerMenu />
            }
          </button>
          <h2>Admin Dashboard</h2>
        </span>
        <div className="admin__links">
          <NavLink to={'/admin/create-product'}>
            <MdOutlineDashboardCustomize />
            <h2>Create Product</h2>
          </NavLink>
          <NavLink to={'/admin/manage-product'}>
            <RiEdit2Line />
            <h2>Manage Product</h2>
          </NavLink>
          <NavLink to={'/admin/create-category'}>
            <MdOutlineDashboardCustomize />
            <h2>Create category</h2>
          </NavLink>
          <NavLink to={'/admin/manage-category'}>
            <RiEdit2Line />
            <h2>Manage category</h2>
          </NavLink>
        </div>
      </div>
      <Outlet   /> 
    </div>
  )
}

export default Admin
