import "./App.css";
import AxiosConfig from "./axios/AxiosConfig.js";
import React from "react";
// import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Login from "./components/Login/Login.js";
import Register from "./components/Registeration/Register";
import Layout from "./components/Layout/Layout.js";
import Home from "./components/Home/Home.js";
import Add_Movie from "./components/API/add/Add_Movie.js";
import Add_Director from "./components/API/add/Add_Director.js";
import Add_Actor from "./components/API/add/Add_Actor.js";
import Add_Genre from "./components/API/add/Add_Genre.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="Home" element={<Home />} />
            <Route path="Add_Movie" element={<Add_Movie />} />
            <Route path="Add_Director" element={<Add_Director />} />
            <Route path="Add_Actor" element={<Add_Actor />} />
            <Route path="Add_Genre" element={<Add_Genre />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;