import React from 'react'

import { Route, Routes } from "react-router-dom";
// import { Navigate } from "react-router-dom";

import { OnlyPublicAuth, RequireAuth } from './base/RequirAuth';
// import { RoleBaseRoute } from './base/RequirAuth';


// import { clearCookie } from './utils/cookieUtils';
// import { ADMIN_DASHBOARD, AUTH, DASHBOARD, USER_DASHBOARD } from './Data/routesURLs';

import { AdminRoutes } from './Modules/Admin/AdminRoutes';
import Login from './Authentication/Login/Login'
import Signup from './Authentication/Signup/Signup'
import NotFound from './Modules/NotFound/NotFound';

// const ACCESS_TOKEN = "TodoAccessToken";

// function RedirectToRespetiveDashboard() {
//     const permittedRoles = localStorage.getItem("user");
//     console.log("permittedRoles from routes:", permittedRoles);
//     if (permittedRoles) {
//         console.log("if1");
//         let MAPPED_DASHBOARD = "/";
//         if (permittedRoles === "user") {
//             console.log("if2");
//             MAPPED_DASHBOARD = USER_DASHBOARD;
//             console.log(USER_DASHBOARD);
//         } else if (permittedRoles === "admin") {
//             console.log("if3");
//             MAPPED_DASHBOARD = ADMIN_DASHBOARD;
//             console.log(ADMIN_DASHBOARD);
//         }
//         return <Navigate to={{ pathname: MAPPED_DASHBOARD }} />;
//     } else {
//         console.log("else");
//         clearCookie(ACCESS_TOKEN);
//         return <Navigate to={{ pathname: AUTH }} />;
//     }
// }

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={
                <OnlyPublicAuth redirectTo={"/"}> 
                {/* replace / with DASHBOARD */}
                    <Login />
                </OnlyPublicAuth>
            } />
            <Route path="/signup" element={
                <OnlyPublicAuth redirectTo={"/"}>
                    <Signup />
                </OnlyPublicAuth>
            } />
            <Route path="*" element={
                <RequireAuth redirectTo="/login">
                    <AdminRoutes></AdminRoutes>
                </RequireAuth>
            } />
            {/* <Route path={`${USER_DASHBOARD}/*`} element={
                <RequireAuth redirectTo={AUTH}>
                    <RoleBaseRoute redirectTo={DASHBOARD} role={"user"}>
                        {console.log("user")}
                        <div>NOT BUILD YET</div>
                    </RoleBaseRoute>
                </RequireAuth>
            } />
            <Route path={`${ADMIN_DASHBOARD}/*`} element={
                <RequireAuth redirectTo={AUTH}>
                    <RoleBaseRoute redirectTo={DASHBOARD} role={"admin"}>
                        {console.log("route admin")}
                        <AdminRoutes></AdminRoutes>
                    </RoleBaseRoute>
                </RequireAuth>
            } />
            <Route path={`${DASHBOARD}/*`} element={
                <RequireAuth redirectTo={AUTH}>
                    <RedirectToRespetiveDashboard></RedirectToRespetiveDashboard>
                </RequireAuth>
            } />
            <Route path={`/`} element={
                <RequireAuth redirectTo={AUTH}>
                    <RedirectToRespetiveDashboard></RedirectToRespetiveDashboard>
                </RequireAuth>
            } /> */}
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes