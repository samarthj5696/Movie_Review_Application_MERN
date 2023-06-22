import { useNavigate } from "react-router";

function Logout(prop) {
  prop.setToken(null);
  const navigate = useNavigate();
  navigate("/");
}
export default Logout;
