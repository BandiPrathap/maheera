import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import StudentManagement from "./pages/StudentManagement";
import UserInteractions from "./components/UserInteractions";
import Chatbot from "./components/Chatbot";
import ImportantDates from "./pages/ImportantDates";
import "bootstrap/dist/css/bootstrap.min.css";
import Guide from "./guide/Guide";
import AdminDoc from "./guide/AdminDoc";
import UserDoc from "./guide/UserDoc";

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
            <Route path = "/chatbot" element = {<Chatbot/>}/>
            <Route path = "/guide" element = {<Guide />}/>
            <Route path = "/guide/admin-doc" element = {<AdminDoc />}/>
            <Route path = "/guide/user-doc" element = {<UserDoc />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
