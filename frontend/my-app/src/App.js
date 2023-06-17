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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
