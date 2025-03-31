import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setIsAdmin}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = () => {
    if (username === "admin" && password === "maheera") {
      localStorage.setItem("adminToken", "validToken");
      setIsAdmin(true);
      toast.success("Login successful!");
    } else {
      toast.error("Invalid username or password");
    }
  };

  return (
    <div className="container mt-5">
      <ToastContainer />
      <div className="card mx-auto shadow" style={{ maxWidth: "400px", border: "none" }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Admin Login</h2>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary w-100" onClick={handleAdminLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
