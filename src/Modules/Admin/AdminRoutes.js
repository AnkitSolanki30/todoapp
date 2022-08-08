import React from 'react'

import { Route, Routes } from 'react-router-dom'

// import { AdminPage } from './Admin'
// import { TODO_LIST, EDIT_USER } from "./AdminRouteUrls"

import Sidebar from '../Sidebar/Sidebar'
// import TodosList from '../Todos/TodosList'
import EditUser from '../User/EditUser'
import NotFound from '../NotFound/NotFound'
import TodosHome from '../Todos/TodosHome'

export const AdminRoutes = () => { 
    return (
        <>
            <div className="row  bg-lightGrey ms-0 me-0">
                <div className="col-2 p-0">
                    <Sidebar />
                </div>
                <div className="col-10 p-0">
                    <Routes>
                        {/* <Route index element={<AdminPage />} /> */}
                        {/* <Route exact path="/" element={<AdminPage />} /> */}
                        <Route exact path="/" element={<TodosHome />} />
                        <Route exact path="/edituser" element={<EditUser />} />
                        {/* <Route exact path="/todoslist" element={<TodosList />} /> */}
                        <Route path={"*"} element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}
