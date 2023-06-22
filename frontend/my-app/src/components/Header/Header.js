import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logout from "../Login/Logout.js";
import { useEffect, useState } from "react";
const Header = (prop) => {
  const [login, setLogin] = useState("Login");
  const [home, setHome] = useState("Home");
  useEffect(() => {
    if (prop.Token) {
      setLogin("Logout");
      setHome("Home");
    } else {
      setLogin("Login");
      setHome("Login");
    }
  }, [prop.Token]);
  return (
    <Navbar>
      <br></br>
      <nav>
        <div>
          <Link to={`/${home}`}>Home</Link>
        </div>
        <div>
          <Link to={`/${login}`}>{login}</Link>
        </div>
      </nav>
      <br></br>
    </Navbar>
  );
};

export default Header;
