import React from 'react'
import { getCookie } from '../utils/cookieUtils'
import { ProtectedRoute } from './ProtectedRoute';

const ACCESS_TOKEN = "TodoAccessToken";

export function RequireAuth({ children, redirectTo }) {
    const isAuthenticated = getCookie(ACCESS_TOKEN) ? true : false;
    return (
        <ProtectedRoute redirectTo={redirectTo} allowCondition={isAuthenticated}>
            {children}
        </ProtectedRoute>
    );
}
export function OnlyPublicAuth({ children, redirectTo }) {
    const isAuthenticated = getCookie(ACCESS_TOKEN) ? true : false;

    return (
        <ProtectedRoute redirectTo={redirectTo} allowCondition={!isAuthenticated}>
            {children}
        </ProtectedRoute>
    );
}
// export function RoleBaseRoute({ children, redirectTo, roles }) {
//     return (
//         <ProtectedRoute redirectTo={redirectTo} allowCondition={grantPermission(roles)} >
//             {children}
//         </ProtectedRoute>
//     );
// }
// export const grantPermission = (requestedRoles) => {
//     const permittedRoles = (localStorage.getItem("user"));
//     if (permittedRoles === requestedRoles) {
//         return true;
//     }
//     // in case of multiple roles, if one of the permittedRoles is present in requestedRoles, return true;
//     return false;
// };
