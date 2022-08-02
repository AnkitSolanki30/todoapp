import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export function ProtectedRoute({ children, redirectTo, allowCondition }) {

  const location = useLocation();
  
  return allowCondition ? (
    children
  ) : (
    <Navigate to={{ pathname: redirectTo, state: { from: location } }} />
  );
}