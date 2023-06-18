import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar>
      <br></br>
      <nav>
        <div>
          <Link to="/Home">Home</Link>
        </div>
        <div>
          <Link to="/Login">Login</Link>
        </div>
      </nav>
      <br></br>
    </Navbar>
  );
};

export default Header;
