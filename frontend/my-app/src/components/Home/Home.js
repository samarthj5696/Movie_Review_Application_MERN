import { Link } from "react-router-dom";
import api from "../../axios/AxiosConfig.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import home from "../Home/home.css";

function Home(prop) {
  const navigate = useNavigate();
  const [getMovies, setMovies] = useState("");
  const [search, setSearch] = useState("");
  async function fun() {
    try {
      if (!prop.Token) {
        navigate("/Login");
      }
      const response = await api.get("/api/movies/get_movies", {
        headers: { Authorization: `Bearer ${prop.Token}` },
      });
      setMovies(response);
      console.log(getMovies);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fun();
  }, []);

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 3,
      }}
    />
  );

  return (
    <div style={{ marginBottom: "20px", marginTop: "80px" }}>
      <div>
        <Link
          to="/Add_Movie"
          style={{
            color: "grey",
            textDecoration: "none",
          }}
        >
          Add_Movie
        </Link>
      </div>
      <div style={{ marginLeft: "250px", marginRight: "250px" }}>
        <Form style={{ marginTop: "10px" }}>
          <InputGroup>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search movies"
            />
          </InputGroup>
        </Form>
      </div>

      <div>
        {getMovies?.data
          ?.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.Movie_Name.toLowerCase().includes(search);
          })
          .map((object) => (
            <div
              style={{
                textAlign: "center",
                maxWidth: "950px",
                margin: "0 auto",
                border: "1px solid #e6e6e6",
                padding: "40px 25px",
                marginTop: "50px",
                backgroundColor: "#36486b",
                color: "white",
              }}
            >
              <h2>
                Movie :{" "}
                <Link
                  to={`${object._id}`}
                  style={{
                    color: "#618685",
                    textDecoration: "none",
                  }}
                >
                  {object.Movie_Name}:
                </Link>
              </h2>

              <div>
                <h4>Cast:</h4>
                {object.Actor?.map((role) => (
                  <div>
                    {role.First_Name} {role.Last_Name}
                  </div>
                ))}
              </div>
              <div>
                <h4>Director:</h4>
                {object.Director?.map((director) => (
                  <div>
                    {director.First_Name} {director.Last_Name}
                  </div>
                ))}
              </div>
              <div>
                <h4>Genre:</h4>
                {object.Genre?.map((genre) => (
                  <div>{genre.Type} </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default Home;
