// import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logout from "../Login/Logout.js";
import { useEffect, useState } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
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
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ position: "fixed", top: "0px", left: "0px", right: "0px" }}
    >
      <Container>
        <Navbar.Brand href="#home">Movie-Review-Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to={`/${home}`}
              style={{
                color: "grey",
                textDecoration: "none",
                marginRight: "10px",
              }}
            >
              Home
            </Link>
            <Link
              to={`/${login}`}
              style={{
                color: "grey",
                textDecoration: "none",
              }}
            >
              {login}
            </Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <Navbar>
    //   <nav>
    //     <div
    //       style={{
    //         position: "fixed",
    //         top: "0px",
    //         left: "0px",
    //         right: "0px",
    //         backgroundColor: "lightcyan",
    //         display: "flex",
    //         flexDirection: "row",
    //         justifyContent: "space-between",
    //         paddingTop: "10px",
    //         paddingBottom: "10px",
    //       }}
    //     >
    //       <div style={{ marginLeft: "10px" }}>
    //         <Link to={`/${home}`}>Home</Link>
    //       </div>
    //       <div style={{ marginRight: "10px" }}>
    //         <Link to={`/${login}`}>{login}</Link>
    //       </div>
    //     </div>
    //   </nav>
    //   <br></br>
    // </Navbar>
  );
};

export default Header;
