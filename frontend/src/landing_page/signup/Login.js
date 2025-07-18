import { useState } from "react";
import axios from "axios";
import "./Signup.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3002/auth/login",
        { username, password },
        { withCredentials: true }
      );
      // ✅ Redirect to Dashboard React App
      window.location.href = "http://localhost:3001";
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login to Zerodha</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
        <p>
          New user?{" "}
          <span style={{ color: "#387ed1", cursor: "pointer" }} onClick={() => (window.location.href = "/signup")}>
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}