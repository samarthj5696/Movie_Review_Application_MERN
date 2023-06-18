import { Link } from "react-router-dom";
import api from "../../axios/AxiosConfig.js";
import { useEffect, useState } from "react";

function Home() {
  const [getMovies, setMovies] = useState("");
  async function fun() {
    console.log("Home");
    try {
      const response = await api.get("/api/movies/get_movies");
      setMovies(response);
      console.log(getMovies);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fun();
  }, []);

  return (
    <div>
      <li>
        <Link to="/Add_Movie">Add_Movie</Link>
      </li>
      <li>
        <Link to="/Add_Actor">Add_Actor</Link>
      </li>
      <li>
        <Link to="/Add_Director">Add_Director</Link>
      </li>
      <li>
        <Link to="/Add_Genre">Add_Genre</Link>
      </li>
      <h1>Home</h1>
      <div>
        {getMovies?.data?.map((object) => (
          <div>
            <h2>Movie :</h2>
            <div>{object.Movie_Name}:</div>
            <div>{object._id}</div>
            <div>
              <h4>Cast:</h4>
              {object.Actor?.map((role) => (
                <div>{role}</div>
              ))}
            </div>
            <div>
              <h4>Director</h4>
              {object.Director?.map((director) => (
                <div>{director}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
