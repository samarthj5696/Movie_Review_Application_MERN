import axios from "axios";
import URL from "../utils/URL.js";

const instance = axios.create({
  baseURL: URL,
  headers: { "ngrok-skip-browser-warning": "True" },
});

export default instance;
