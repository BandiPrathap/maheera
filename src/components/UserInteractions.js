import React, { useState, useEffect } from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import axios from "axios";

const UserInteractions = () => {
  const [interactions, setInteractions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInteractions = async () => {
      try {
        const response = await axios.get("http://localhost:5000/user_interactions");
        setInteractions(response.data);
      } catch (err) {
        setError("Failed to fetch user interactions.");
      } finally {
        setLoading(false);
      }
    };
    fetchInteractions();
  }, []);

  return (
    <div>
      <h2>User Interactions</h2>
      {loading && <Spinner animation="border" />}
      {error && <p className="text-danger">{error}</p>}
      {!loading && !error && (
        <ListGroup className="mt-3">
          {interactions.length > 0 ? (
            interactions.map((interaction, index) => (
              <ListGroup.Item key={index}>
                <strong>{interaction.student_name}:</strong> Interacted on {interaction.interaction_date} ({interaction.total_interactions} times)
              </ListGroup.Item>
            ))
          ) : (
            <p>No interactions found.</p>
          )}
        </ListGroup>
      )}
    </div>
  );
};

export default UserInteractions;