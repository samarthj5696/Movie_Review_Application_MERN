import React, { useState } from "react";
import api from "../../../axios/AxiosConfig.js";
import Select from "react-select";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Add_Genre(prop) {
  const [Genre, setGenre] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post(
        "/api/movies/add_genre",
        {
          Type: Genre,
        },
        { headers: { Authorization: `Bearer ${prop.Token}` } }
      );
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

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
          Back
        </Link>
      </div>
      <br />
      <br />

      <form onSubmit={handleSubmit}>
        <label>
          Genre:
          <input
            type="text"
            value={Genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </label>
        <br />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default Add_Genre;
