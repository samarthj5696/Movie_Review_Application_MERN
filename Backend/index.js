const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
mongoose.set("strictQuery", true);

//DB Connection
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to db")
);

//Routes
const movieRoutes = require("./routes/route.js");

//Middleware
app.use(express.json());
app.use(cors());
app.use("/api/movies", movieRoutes);

//Port details
const PORT = 7000;
app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
