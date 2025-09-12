import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import SubmitIdea from "./pages/SubmitIdea";
import Success from './pages/Success';
import IdeaHistory from './pages/IdeaHistory';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProtectedRoute from './auth/ProtectedRoute';
import BackgroundParticles from './components/BackgroundParticles.jsx';

export default function App() {
  return (
    <>
      <BackgroundParticles />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/success" element={<Success />} />

        {/* Protected Routes */}
        <Route 
          path="/submit" 
          element={<ProtectedRoute><SubmitIdea /></ProtectedRoute>} 
        />
        <Route 
          path="/history" 
          element={<ProtectedRoute><IdeaHistory /></ProtectedRoute>} 
        />
      </Routes>
    </>
  );
}
