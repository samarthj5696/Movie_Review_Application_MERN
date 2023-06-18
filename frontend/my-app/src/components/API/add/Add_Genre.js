import React, { useState } from "react";
import api from "../../../axios/AxiosConfig.js";
import Select from "react-select";
import { useEffect } from "react";
function Add_Genre() {
  const [Genre, setGenre] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post("/api/movies/add_genre", {
        Type: Genre,
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Genre:
          <input
            type="text"
            value={Genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </label>

        <input type="submit" />
      </form>
    </div>
  );
}

export default Add_Genre;
