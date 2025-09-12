import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // If the user is not logged in, redirect them to the /login page
    return <Navigate to="/login" replace />;
  }

  // If the user is logged in, render the component they were trying to access
  return children;
}