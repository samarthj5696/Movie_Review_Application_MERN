import React, { useState } from "react";
import api from "../../../axios/AxiosConfig.js";
import Select from "react-select";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Register(prop) {
  const [movie_name, setMovie] = React.useState("");
  const [IMDB_ID, setIMDB_ID] = React.useState("");

  const [actor, setActor] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("");

  const [selectedOptionsActor, setSelectedOptionsActor] = useState();
  const [selectedOptionsDirector, setSelectedOptionsDirector] = useState();
  const [selectedOptionsGenre, setSelectedOptionsGenre] = useState();

  async function GetInfo() {
    try {
      const responseActor = await api.get("api/movies/get_actor", {
        headers: { Authorization: `Bearer ${prop.Token}` },
      });
      const responseDirector = await api.get("api/movies/get_director", {
        headers: { Authorization: `Bearer ${prop.Token}` },
      });
      const responseGenre = await api.get("api/movies/get_genre", {
        headers: { Authorization: `Bearer ${prop.Token}` },
      });

      const dActor = responseActor.data;
      let tactor = [];
      for (let i = 0; i < dActor.length; i++) {
        tactor.push({
          value: dActor[i]._id,
          label: dActor[i].First_Name + " " + dActor[i].Last_Name,
        });
      }
      console.log("tactor :", tactor);
      if (tactor) {
        setActor(tactor);
      }

      const dDirector = responseDirector.data;
      let tdirector = [];
      for (let i = 0; i < dDirector.length; i++) {
        tdirector.push({
          value: dDirector[i]._id,
          label: dDirector[i].First_Name + " " + dDirector[i].Last_Name,
        });
      }
      console.log("tdirector :", tdirector);
      if (tdirector) {
        setDirector(tdirector);
      }

      const dGenre = responseGenre.data;
      let tgenre = [];
      for (let i = 0; i < dGenre.length; i++) {
        tgenre.push({
          value: dGenre[i]._id,
          label: dGenre[i].Type,
        });
      }
      console.log("tgenre :", tgenre);
      if (tgenre) {
        setGenre(tgenre);
      }

      console.log("Get_Info");
      console.log(responseActor, responseDirector, responseGenre);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    GetInfo();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(prop.Token);
    try {
      const selectedActor = [];
      for (let i = 0; i < selectedOptionsActor.length; i++) {
        selectedActor.push(selectedOptionsActor[i].value);
      }
      console.log("selectedOptionsActor: ", selectedActor);
      const selectedDirector = [];
      for (let i = 0; i < selectedOptionsDirector.length; i++) {
        selectedDirector.push(selectedOptionsDirector[i].value);
      }
      console.log("selectedOptionsDirector: ", selectedDirector);
      const selectedGenre = [];
      for (let i = 0; i < selectedOptionsGenre.length; i++) {
        selectedGenre.push(selectedOptionsGenre[i].value);
      }
      console.log("selectedOptionsGenre: ", selectedGenre);

      const response = await api.post(
        "/api/movies/add_movie",
        {
          Movie_Name: movie_name,
          IMDB_ID: IMDB_ID,
          Comments: [],
          Rating: 0,
          Actor: selectedActor,
          Director: selectedDirector,
          Genre: selectedGenre,
        },
        { headers: { Authorization: `Bearer ${prop.Token}` } }
      );
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  // Function triggered on selection
  function handleSelectActor(data) {
    setSelectedOptionsActor(data);
  }
  function handleSelectDirector(data) {
    setSelectedOptionsDirector(data);
  }
  function handleSelectGenre(data) {
    setSelectedOptionsGenre(data);
  }
  return (
    <div style={{ marginBottom: "20px", marginTop: "80px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
          <Link
            to="/Add_Actor"
            style={{
              color: "grey",
              textDecoration: "none",
            }}
          >
            Add_Actor
          </Link>
        </div>
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
          <Link
            to="/Add_Director"
            style={{
              color: "grey",
              textDecoration: "none",
            }}
          >
            Add_Director
          </Link>
        </div>
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
          <Link
            to="/Add_Genre"
            style={{
              color: "grey",
              textDecoration: "none",
            }}
          >
            Add_Genre
          </Link>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px", marginTop: "10px" }}>
          <div style={{ marginBottom: "10px" }}>
            <p style={{ display: "inline", marginRight: "10px" }}>
              Movie_name:
            </p>
            <input
              type="text"
              value={movie_name}
              onChange={(e) => setMovie(e.target.value)}
            />
          </div>

          <div>
            <p style={{ display: "inline", marginRight: "10px" }}>IMDB_ID:</p>
            <input
              type="text"
              value={IMDB_ID}
              onChange={(e) => setIMDB_ID(e.target.value)}
            />
          </div>
        </div>

        <div
          style={{
            width: "350px",
            justifyContent: "center",
            margin: "auto",
            marginBottom: "5px",
          }}
        >
          Actor:
          <Select
            options={Array.isArray(actor) ? actor : []}
            placeholder="Select color"
            value={selectedOptionsActor}
            onChange={handleSelectActor}
            isSearchable={true}
            isMulti
            // styles={{ display: "inline" }}
          />
        </div>
        <br></br>
        <div
          style={{
            width: "350px",
            justifyContent: "center",
            margin: "auto",
            marginBottom: "5px",
          }}
        >
          Director:
          <Select
            options={Array.isArray(director) ? director : []}
            placeholder="Select color"
            value={selectedOptionsDirector}
            onChange={handleSelectDirector}
            isSearchable={true}
            isMulti
          />
        </div>
        <br></br>
        <div
          style={{
            width: "350px",
            justifyContent: "center",
            margin: "auto",
            marginBottom: "5px",
          }}
        >
          Genre:
          <Select
            options={Array.isArray(genre) ? genre : []}
            placeholder="Select color"
            value={selectedOptionsGenre}
            onChange={handleSelectGenre}
            isSearchable={true}
            isMulti
          />
        </div>
        <br></br>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Register;
