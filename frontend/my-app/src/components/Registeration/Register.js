import React from "react";
import axios from "axios";
import api from "../../axios/AxiosConfig.js";
import "./register.css";
import { useNavigate } from "react-router";
function Register() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`username:${username}, email:${email}, password:${password}`);
    try {
      const response = await api.post("/api/movies/register", {
        username: username,
        email: email,
        password: password,
      });
      console.log(response);
      if (response.status === 200) {
        navigate("/Login");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div style={{ marginBottom: "20px", paddingTop: "80px" }}>
      <div style={{ fontWeight: "bold", fontSize: "25px" }}>Registeration</div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px", marginTop: "25px" }}>
          <div style={{ display: "inline" }}>Username: </div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <div style={{ display: "inline" }}>Email: </div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "30px" }}>
          <div style={{ display: "inline" }}>Password: </div>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" className="button1" />
      </form>
    </div>
  );
}

export default Register;
