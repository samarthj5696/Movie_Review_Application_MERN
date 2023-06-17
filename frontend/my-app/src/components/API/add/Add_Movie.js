import React, { useState } from "react";
import api from "../../../axios/AxiosConfig.js";
import Select from "react-select";
import { useEffect } from "react";
// Movie_Name: String,
//   IMDB_ID: String,
//   Comments: Array,
//   Rating: Number,
//   Actor: Array,
//   Director: Array,
//   Genre: Array,
function Register() {
  const [movie_name, setMovie] = React.useState("");
  const [IMDB_ID, setIMDB_ID] = React.useState("");

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [actor, setActor] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("");

  const GetInfo = async () => {
    try {
      const responseActor = await api.get("api/movies/get_actor");
      const responseDirector = await api.get("api/movies/get_director");
      const responseGenre = await api.get("api/movies/get_genre");
      setActor(responseActor.data);
      setDirector(responseDirector.data);
      setGenre(responseGenre.data);
      console.log(responseActor, responseDirector, responseGenre);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    GetInfo();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post("/api/movies/add_movie", {
        movie_name: event.movie_name,
        IMDB_ID: event.IMDB_ID,
        Comments: [],
        Rating: 0,
        Actor: [],
        Director: [],
        Genre: [],
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  const [selectedOptions, setSelectedOptions] = useState();
  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Movie_name:
          <input
            type="text"
            value={movie_name}
            onChange={(e) => setMovie(e.target.value)}
          />
        </label>
        <label>
          IMDB_ID:
          <input
            type="text"
            value={IMDB_ID}
            onChange={(e) => setIMDB_ID(e.target.value)}
          />
        </label>
        <div>
          Actor:
          <Select
            options={options}
            placeholder="Select color"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            isMulti
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Register;
