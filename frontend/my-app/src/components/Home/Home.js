import axios from "axios";
import api from "../../axios/AxiosConfig.js";
// import { useState } from "react";

import { useEffect, useState } from "react";

function Home() {
  const [getMovies, setMovies] = useState("");
  const fun = async () => {
    console.log("Home");
    try {
      const response = await api.get("/api/movies/");
      console.log(response);
      setMovies(response);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fun();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div>
        {getMovies.data?.map((object) => (
          <div>
            <h2>Movie :</h2>
            <div>{object.Movie_Name}:</div>
            <div>{object._id}</div>
            <div>
              <h4>Cast:</h4>
              {object.Role.map((role) => (
                <div>{role}</div>
              ))}
            </div>
            <div>
              <h4>Director</h4>
              {object.Director.map((director) => (
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
