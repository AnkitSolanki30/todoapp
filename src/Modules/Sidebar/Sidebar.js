import React from 'react'
// import { useState, useEffect } from 'react'

import { NavLink, useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

import { clearCookie } from '../../utils/cookieUtils';
import "./Sidebar.scss"

const ACCESS_TOKEN = "TodoAccessToken";

const Sidebar = () => {

    const navigation = useNavigate()

    const handleLogout = (e) => {
        e.preventDefault();
        console.log("Logged Out From Front End");
        localStorage.removeItem("userName");
        clearCookie(ACCESS_TOKEN);
        navigation("/login")
    }

  return (
    <>
      <div className="h-100vh position-fixed">
        <div className="listWrapper  d-flex flex-column ms-3 my-3 overflow-auto">
          <ul className="sidebarItems">
            <li className="sidebarheader">
            <p className='headreText'>TODO APP</p>
              {/* <Link to={"/"}>TODO APP</Link> */}
              <hr className="sidebarHeaderbottom" />
            </li>
              <li className="my-3">
                <NavLink to="/" className={({ isActive }) => isActive ? "active sidebarItem" : "sidebarItem" } >
                    TODOs
                </NavLink>
              </li>
              <li className="my-3">
                <NavLink to="/edituser" className={({ isActive }) => isActive ? "active sidebarItem" : "sidebarItem" } >
                    Update User Info
                </NavLink>
              </li>
          </ul>
          <div className="mt-auto m-3 text-center ">
            <div onClick={handleLogout} className="logOutBtn active sidebarItem">
              Logout
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar