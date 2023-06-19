import axios from "axios";
import { useState } from "react";

// export default axios.create({
//   baseURL: "http://localhost:7000",
//   headers: { "ngrok-skip-browser-warning": "True" ,"Authorization":"" },
// });

const instance = axios.create({
  baseURL: "http://localhost:7000",
  headers: { "ngrok-skip-browser-warning": "True" },
});

export default instance;
