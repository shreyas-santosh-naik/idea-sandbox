import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SubmitIdea from "./pages/SubmitIdea";
// import Leaderboard from "./pages/Leaderboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/submit" element={<SubmitIdea />} />
       {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
    </Routes>
  );
}
