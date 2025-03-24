import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import StudentManagement from "./pages/StudentManagement";
import UserInteractions from "./components/UserInteractions";
import ImportantDates from "./pages/ImportantDates";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="content p-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<StudentManagement />} />
            <Route path="/interactions" element={<UserInteractions />} />
            <Route path="/dates" element={<ImportantDates />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
