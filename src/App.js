import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import CyberQuestLanding from "./components/landing";
import Leaderboard from "./components/leaderboard";
import PhishingGame from "./components/PhishingGame";
import ProfileAnalytics from "./components/profile";
import CyberQuestDashboard from "./components/dashboard";
import CyberQuestLogin from "./components/signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CyberQuestLanding />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/phishing-game" element={<PhishingGame />} />
        <Route path="/profile" element={<ProfileAnalytics />} />
        <Route path="/dashboard" element={<CyberQuestDashboard />} />
        <Route path="/signup" element={<CyberQuestLogin />} />
      </Routes>
    </div>
  );
}

export default App;
