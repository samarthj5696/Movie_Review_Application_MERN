import React, { useState } from "react";
import api from "../../axios/AxiosConfig.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div style={{ marginBottom: "20px", marginTop: "80px" }}>
      <form onSubmit={handleSubmit}>
        <div
          style={{ fontWeight: "bold", fontSize: "25px", marginBottom: "20px" }}
        >
          {Status}
        </div>
        <label>
          <div style={{ display: "inline", marginRight: "5px" }}>Email:</div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          <div style={{ display: "inline", marginRight: "5px" }}>Password:</div>
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
      <div style={{ marginTop: "20px" }}>
        Register as new user :
        <Link to="/Register" style={{ color: "grey" }}>
          Register
        </Link>
      </div>
    </div>
  );
}
export default Login;
