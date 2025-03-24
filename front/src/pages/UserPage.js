import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserPage = () => {
  const [username, setUsername] = useState("");
  const [sessionId, setSessionId] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/session/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(username),
      });

      if (response.ok) {
        const data = await response.json();
        setSessionId(data.id);
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
      {sessionId && (
        <div className="mt-3">
          <strong>Session ID:</strong> {sessionId}
        </div>
      )}
    </div>
  );
};

export default UserPage;
