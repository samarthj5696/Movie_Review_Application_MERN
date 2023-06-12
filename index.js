const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
mongoose.set("strictQuery", true);
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to db")
);

const movieRoutes = require("./routes/route.js");

app.use(express.json());
app.use(cors());

app.use("/api/movies", movieRoutes);
app.listen(4000, () => {
  console.log("App is running");
});
