import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaComments, FaCalendarAlt,FaBook } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h4 className="text-center py-3 mb-0">Menu</h4>
      <p className="text-center">Chatbot Management Platform</p>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <FaHome className="me-2" /> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/guide">
          <FaBook className="me-2" /> Guide
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/students">
            <FaUsers className="me-2" /> Manage Students
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/interactions">
            <FaComments className="me-2" /> User Interactions
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dates">
            <FaCalendarAlt className="me-2" /> Important Dates
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;