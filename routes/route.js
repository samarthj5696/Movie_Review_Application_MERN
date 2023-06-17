const router = require("express").Router();
const controller = require("../controller/Add_Controller.js");
const add = require("../controller/Add_movie.js");
const delete_controller = require("../controller/Delete_Controller.js");
const user_controller = require("../controller/User_Controller.js");
const validateToken = require("../errorHandling/TokenHandler.js");

// router.use(validateToken);
//Get
router.get("/", validateToken, controller.movie_all);
router.get("/get_actor", controller.get_actor);
router.get("/get_director", controller.get_director);
router.get("/get_genre", controller.get_genre);

//Add
router.post("/add_actor", validateToken, controller.add_actor);
router.post("/add_movie", validateToken, add.add_movie);
router.post("/add_genre", validateToken, controller.add_Genre);
router.post("/add_director", validateToken, controller.add_Director);

//Delete
router.delete("//movie/:id", validateToken, delete_controller.delete_movie);
router.delete("/actor/:id", validateToken, delete_controller.delete_actor);
router.delete(
  "/director/:id",
  validateToken,
  delete_controller.delete_director
);
router.delete("/genre/:id", validateToken, delete_controller.delete_genre);

//Update
// router.get("/:productId");
// router.put("/:productId");

//Login and Registration
router.post("/register", user_controller.registerUser);
router.post("/login", user_controller.loginUser);
module.exports = router;
