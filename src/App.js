import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import CyberQuestLanding from "./components/landing";
import Leaderboard from "./components/leaderboard";
import PhishingGame from "./components/PhishingGame";
import PasswordStrengthArena from "./components/password";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<CyberQuestLanding />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/phishing-game" element={<PhishingGame />} />
          <Route path="/password" element={<PasswordStrengthArena/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
