import { Link } from "react-router-dom";
import api from "../../axios/AxiosConfig.js";
import { useEffect, useState } from "react";

function Home(prop) {
  const [getMovies, setMovies] = useState("");
  async function fun() {
    console.log("Home");
    console.log(prop.Token);
    try {
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

  return (
    <div>
      <div>
        <Link to="/Add_Movie">Add_Movie</Link>
      </div>
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
