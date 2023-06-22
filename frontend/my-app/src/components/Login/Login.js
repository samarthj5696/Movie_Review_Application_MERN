import React from "react";
import api from "../../axios/AxiosConfig.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login(prop) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`email:${email}, password:${password}`);
    try {
      const response = await api.post("/api/movies/login", {
        email: email,
        password: password,
      });
      console.log(response);
      if (response.status === 200) {
        console.log(response.data.accessToken);
        prop.setToken(response.data.accessToken);
        navigate("/Home");
      }
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
