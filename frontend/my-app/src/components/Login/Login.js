import React from "react";
import axios from "axios";
import api from "../../axios/AxiosConfig.js";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`email:${email}, password:${password}`);
    try {
      const response = await api.post("/api/movies/login", {
        email: email,
        password: password,
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          username:
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
export default Login;
