import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/profile/ProfilePage";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="pt-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:username" element={<ProfilePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
