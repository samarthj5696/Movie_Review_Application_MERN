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
    <div>
      <form onSubmit={handleSubmit}>
        <div>Username: </div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />

        <div>Email: </div>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <div>Password: </div>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" className="button1" />
      </form>
    </div>
  );
}

export default Register;
