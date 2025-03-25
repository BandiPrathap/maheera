import React, { useState, useEffect } from "react";
import { Table, Spinner, Alert } from "react-bootstrap";
import axios from "axios";

const UserInteractions = () => {
  const [interactions, setInteractions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInteractions = async () => {
      try {
        const response = await axios.get(
          "https://maheera-woad.vercel.app/user_interactions"
        );
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
      {error && <Alert variant="danger">{error}</Alert>}
      {!loading && !error && (
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Interaction Date</th>
              <th>Total Interactions</th>
            </tr>
          </thead>
          <tbody>
            {interactions.length > 0 ? (
              interactions.map((interaction, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{interaction.student_name}</td>
                  <td>{interaction.interaction_date}</td>
                  <td>{interaction.total_interactions}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No interactions found.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default UserInteractions;
