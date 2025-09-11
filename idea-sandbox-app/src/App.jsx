import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import SubmitIdea from "./pages/SubmitIdea";
import Success from './pages/Success';
import IdeaHistory from './pages/IdeaHistory';
import BackgroundParticles from './components/BackgroundParticles.jsx'; // Corrected Path
// import Leaderboard from "./pages/Leaderboard";

export default function App() {
  return (
    <>
      <BackgroundParticles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<SubmitIdea />} />
        <Route path="/success" element={<Success />} />
        <Route path="/history" element={<IdeaHistory />} />
        {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
      </Routes>
    </>
  );
}
