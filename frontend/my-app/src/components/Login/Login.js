import React, { useState } from "react";
import api from "../../axios/AxiosConfig.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login(prop) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const [Status, setStatus] = useState("Welcome");
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`email:${email}, password:${password}`);
    try {
      const response = await api.post("/api/movies/login", {
        email: email,
        password: password,
      });
      console.log(response);
      if (response.data.res !== "invalid") {
        console.log(response.data.accessToken);
        prop.setToken(response.data.accessToken);
        navigate("/Home");
      }
      if (response.data.res === "invalid") {
        setStatus("Invalid Username or Password");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>{Status}</div>
        <br />
        <label>
          email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          password:
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <br />
        <input type="submit" />
      </form>
      <br />
      <br />

      <div>
        Register as new user :<Link to="/Register">Register</Link>
      </div>
    </div>
  );
}
export default Login;
