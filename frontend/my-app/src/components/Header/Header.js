import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./header.css";

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
    <Navbar expand="lg" className="bg-body-tertiary navBar">
      <Container>
        <Navbar.Brand href="#home">Movie-Review-Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={`/${home}`} className="textStyle">
              Home
            </Link>
            <Link to={`/${login}`} className="textStyle">
              {login}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
