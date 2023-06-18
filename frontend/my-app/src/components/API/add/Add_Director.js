import React, { useState } from "react";
import api from "../../../axios/AxiosConfig.js";
import Select from "react-select";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Add_Director() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post("/api/movies/add_director", {
        First_Name: FirstName,
        Last_Name: LastName,
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div>
        <Link to="/Add_Movie">Back</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Add_Director;
