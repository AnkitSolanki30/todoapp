import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { clearCookie } from '../../utils/cookieUtils';
import "./Sidebar.scss"

const ACCESS_TOKEN = "TodoAccessToken";

export const ADMINROUTES = [
  {
    path: "/admin/todolist",
    text: "TODO List",
  },
  {
    path: "/admin/edituser",
    text: "Edit User Info",
  },
];
export const USERROUTES = [
  {
    path: "/doctor/page1",
    text: "Doctor 1",
  },
  {
    path: "/doctor/page2",

    text: "Page 2",
  },
];

const Sidebar = () => {
  const [menuItem, setMenuItem] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  // eslint-disable-next-line
  const { pathname } = location;
  useEffect(() => {
    let user = (localStorage.getItem("user"));

    if (user) {
      if (user === "user") {
        setMenuItem(USERROUTES);
      } else if (user === "admin") {
        setMenuItem(ADMINROUTES);
      }
    }
  }, [menuItem]);

  const logout = () => {
    clearCookie(ACCESS_TOKEN);
    navigate("/");
  };

  return (
    <>
      <div className="h-100vh">
        <div className="listWrapper  d-flex flex-column ms-3 my-3 overflow-auto">
          <ul className="sidebarItems">
            <li className="sidebarheader">
              <Link to={"/"}>Header Text</Link>
              <hr className="sidebarHeaderbottom" />
            </li>
            {menuItem.map((item) => (
              <li key={item.path} className="my-3">
                <NavLink to={item.path} className={({ isActive }) => isActive ? "active sidebarItem" : "sidebarItem" } >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-auto m-3 text-center ">
            <div onClick={logout} className="logOutBtn btn-border-radius">
              <Link to={"/"}>Logout</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}




// const Sidebar = () => {

//     const navigation = useNavigate()

//     console.log(getCookie(ACCESS_TOKEN));

//     const handlceLogout = (e) => {
//         e.preventDefault();
//         console.log("Logged Out From Front End");
//         clearCookie(ACCESS_TOKEN);
//         navigation("/")
//     }

//   return (
//     <>
//       <div className="h-100vh">
//         <div className="listWrapper  d-flex flex-column ms-3 my-3 overflow-auto">
//           <ul className="sidebarItems">
//             <li className="sidebarheader">
//               <Link to={"/dashboard"}>TODO APP</Link>
//               <hr className="sidebarHeaderbottom" />
//             </li>
//               <li className="my-3">
//                 <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active sidebarItem" : "sidebarItem" } >
//                     Dashboard
//                 </NavLink>
//               </li>
//               <li className="my-3">
//                 <NavLink to="/updateuser" className={({ isActive }) => isActive ? "active sidebarItem" : "sidebarItem" } >
//                     Update User Info
//                 </NavLink>
//               </li>
//           </ul>
//           <div className="mt-auto m-3 text-center ">
//             <div onClick={handlceLogout} className="logOutBtn btn-border-radius">
//               <Link to={"/"}>Logout</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

export default Sidebar