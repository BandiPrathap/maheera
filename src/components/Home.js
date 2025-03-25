import React from "react";
import { FaCalendarAlt, FaCreditCard, FaBook, FaCheckCircle } from "react-icons/fa";

const teamMembers = [
  { name: "Prathap", role: "Lead Developer", img: "https://via.placeholder.com/100" },
  { name: "Alice", role: "Data Scientist", img: "https://via.placeholder.com/100" },
  { name: "Bob", role: "Backend Engineer", img: "https://via.placeholder.com/100" },
  { name: "Bob", role: "Backend Engineer", img: "https://via.placeholder.com/100" },
];

const features = [
  { icon: <FaCalendarAlt size={30} />, title: "Exam Schedules", desc: "Get upcoming exam dates and timings." },
  { icon: <FaCreditCard size={30} />, title: "Fee Payments", desc: "Check pending fees and payment options." },
  { icon: <FaBook size={30} />, title: "Enrollments", desc: "Register for courses and view subjects." },
  { icon: <FaCheckCircle size={30} />, title: "Results", desc: "View your latest exam scores." },
];

export default function Home() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center bg-primary text-white p-5 rounded">
        <h1 className="display-4 fw-bold">Maheera Chatbot Assistant</h1>
        <p className="lead mt-2">Providing university-related information at your fingertips.</p>
        <button className="btn btn-light text-primary mt-3">Explore Chatbot</button>
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
    </div>
  );
}