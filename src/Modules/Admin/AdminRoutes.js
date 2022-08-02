import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { AdminPage } from './Admin'
import { TODO_LIST, EDIT_USER } from "./AdminRouteUrls"

import Sidebar from '../Sidebar/Sidebar'
import TodoList from '../User/TodoList'
import EditUser from '../User/EditUser'
import NotFound from '../NotFound/NotFound'

export const AdminRoutes = () => { 
    return (
        <>
            <div className="row  bg-lightGrey ms-0 me-0">
                <div className="col-2 p-0">
                    <Sidebar />
                </div>
                <div className="col-10 p-0">
                    <Routes>
                        <Route index element={<AdminPage />} />
                        <Route exact path={`${TODO_LIST}/*`} element={<TodoList />} />
                        <Route exact path={`${EDIT_USER}/*`} element={<EditUser />} />
                        <Route path={"*"} element={<NotFound />} />

                        {/* <Route exact path="/" element={token ? <TodoList /> : <Login />} /> */}
                    </Routes>
                </div>
            </div>
        </>
    )
}

// const token = getCookie(ACCESS_TOKEN)

//     return (
//         <>
//             {/* {token ? <Sidebar /> : null} */}
//             <div className="row  bg-lightGrey ms-0 me-0">
//                 <div className={`${token ? "col-2" : ""} p-0`}>
//                     {token ? <Sidebar /> : null}
//                     {/* <Sidebar /> */}
//                 </div>
//                 <div className={`${token ? "col-10" : ""} p-0`}>
                    // <Routes>
                    //     <Route exact path="/" element={token ? <TodoList /> : <Login />} />
                    //     <Route exact path="/login" element={<Login />} />
                    //     <Route exact path="/signup" element={<Signup />} />
                    //     <Route exact path="/todopage" element={<TodoList />} />
                    // </Routes>
//                 </div>
//             </div>
//         </>
//     )