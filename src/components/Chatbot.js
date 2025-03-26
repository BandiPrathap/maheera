import { useState } from "react";
import { motion } from "framer-motion";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRobot, FaUser } from "react-icons/fa";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" },
  ]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!query.trim()) return;
    
    const newMessages = [...messages, { text: query, sender: "user" }];
    setMessages(newMessages);
    setQuery("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query }),
      });
      
      const data = await response.json();
      setMessages([...newMessages, { text: data.response, sender: "bot" }]);
    } catch (error) {
      setMessages([...newMessages, { text: "Error reaching server", sender: "bot" }]);
    }
    
    setLoading(false);
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <div className="card shadow-lg w-100" style={{ maxWidth: "400px" }}>
        <div className="card-header bg-primary text-white text-center">
          <h5 className="mb-0">Chatbot</h5>
        </div>
        <div className="card-body p-3" style={{ height: "400px", overflowY: "auto" }}>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`d-flex align-items-center mb-2 ${
                msg.sender === "user" ? "justify-content-end" : "justify-content-start"
              }`}
            >
              {msg.sender === "bot" && <FaRobot className="me-2 text-primary" />}
              <div className={`p-2 rounded w-75 ${
                msg.sender === "user" ? "bg-primary text-white text-end" : "bg-light"
              }`}>
                {msg.text}
              </div>
              {msg.sender === "user" && <FaUser className="ms-2 text-secondary" />}
            </motion.div>
          ))}
        </div>
        <div className="card-footer d-flex gap-2 p-2 bg-light">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type your message..."
            className="form-control"
            disabled={loading}
          />
          <button className="btn btn-primary" onClick={sendMessage} disabled={loading}>
            <PaperPlaneIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
