import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import SubmitIdea from "./pages/SubmitIdea";
import Success from './pages/Success';
// import Leaderboard from "./pages/Leaderboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/submit" element={<SubmitIdea />} />
      <Route path="/success" element={<Success />} />
       {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
    </Routes>
  );
}
