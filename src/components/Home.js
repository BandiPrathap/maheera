import React, { useState } from "react";
import { FaCalendarAlt, FaCreditCard, FaBook, FaCheckCircle, FaCommentDots, FaRobot } from "react-icons/fa";
import Chatbot from "./Chatbot"; // Import your Chatbot component
import "bootstrap/dist/css/bootstrap.min.css";

const teamMembers = [
  { name: "Prathap", role: "Lead Developer", img: "https://via.placeholder.com/100" },
  { name: "Alice", role: "Data Scientist", img: "https://via.placeholder.com/100" },
  { name: "Bob", role: "Backend Engineer", img: "https://via.placeholder.com/100" },
];

const features = [
  { icon: <FaCalendarAlt size={30} />, title: "Exam Schedules", desc: "Get upcoming exam dates and timings." },
  { icon: <FaCreditCard size={30} />, title: "Fee Payments", desc: "Check pending fees and payment options." },
  { icon: <FaBook size={30} />, title: "Enrollments", desc: "Register for courses and view subjects." },
  { icon: <FaCheckCircle size={30} />, title: "Results", desc: "View your latest exam scores." },
];

export default function Home() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center bg-primary text-white p-5 rounded">
        <h1 className="display-4 fw-bold">Maheera Chatbot Assistant</h1>
        <p className="lead mt-2">Providing university-related information at your fingertips.</p>
        
        <div className="mt-3">
          {/* Open Chatbot Modal */}
          <button className="btn btn-light text-primary me-3" onClick={() => setShowChatbot(true)}>
            <FaCommentDots className="me-2" /> Chat Now
          </button>

          {/* Redirect to Telegram Bot */}
          <a href="https://t.me/Pothuraju_bot" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
            <FaRobot className="me-2" /> Chat with Telegram Bot
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="row mt-5">
        {features.map((feature, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-4">
            <div className="card text-center p-4 shadow-sm">
              <div className="text-primary mb-2">{feature.icon}</div>
              <h3 className="h5 fw-bold">{feature.title}</h3>
              <p className="text-muted">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="mt-5 text-center">
        <h2 className="fw-bold">Meet Our Team</h2>
        <div className="row justify-content-center mt-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card p-4 text-center shadow-sm">
                <img src={member.img} alt={member.name} className="rounded-circle mx-auto" width="80" height="80" />
                <h3 className="h6 fw-bold mt-2">{member.name}</h3>
                <p className="text-muted">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-5 text-center bg-light p-4 rounded">
        <h2 className="h5 fw-bold">Need Help?</h2>
        <p className="text-muted">Contact us at support@unibot.com</p>
      </div>

      {/* Chatbot Popup (Bootstrap Modal) */}
      {showChatbot && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Chatbot</h5>
                <button type="button" className="btn-close" onClick={() => setShowChatbot(false)}></button>
              </div>
              <div className="modal-body">
                <Chatbot />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Backdrop */}
      {showChatbot && <div className="modal-backdrop fade show" onClick={() => setShowChatbot(false)}></div>}
    </div>
  );
}
