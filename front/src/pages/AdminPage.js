import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminPage = () => {
  const [sessions, setSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const response = await fetch("http://localhost:8080/session/");
      if (response.ok) {
        const data = await response.json();
        setSessions(data);
      } else {
        console.error("Failed to fetch sessions");
      }
    } catch (error) {
      console.error("Error fetching sessions:", error);
    }
  };

  const fetchSessionDetails = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/session/${id}`);
      if (response.ok) {
        const data = await response.json();
        setSelectedSession(data);
      } else {
        console.error("Failed to fetch session details");
      }
    } catch (error) {
      console.error("Error fetching session details:", error);
    }
  };

  const terminateSession = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/session/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setSessions(sessions.filter(session => session.id !== id));
        setSelectedSession(null);
      } else {
        console.error("Failed to terminate session");
      }
    } catch (error) {
      console.error("Error terminating session:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Admin Panel</h2>
      <h4>Active Sessions</h4>
      <ul className="list-group">
        {sessions.map((session) => (
          <li
            key={session.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {session.user} - {session.id}
            <button
              className="btn btn-info btn-sm"
              onClick={() => fetchSessionDetails(session.id)}
            >
              View
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => terminateSession(session.id)}
            >
              Terminate
            </button>
          </li>
        ))}
      </ul>
      {selectedSession && (
        <div className="mt-4">
          <h4>Session Details</h4>
          <p><strong>ID:</strong> {selectedSession.id}</p>
          <p><strong>User:</strong> {selectedSession.user}</p>
          <p><strong>Timestamp:</strong> {selectedSession.timestamp}</p>
          <p><strong>Active:</strong> {selectedSession.active ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
