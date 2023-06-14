const router = require("express").Router();
const controller = require("../controller/Add_Controller.js");
const add = require("../controller/Add_movie.js");
const delete_controller = require("../controller/Delete_Controller.js");

//Get
router.get("/", controller.movie_all);

//Add
router.post("/add_actor", controller.add_actor);
router.post("/add_movie", add.add_movie);
router.post("/add_genre", controller.add_Genre);
router.post("/add_director", controller.add_Director);

//Delete
router.delete("//movie/:id", delete_controller.delete_movie);
router.delete("/actor/:id", delete_controller.delete_actor);
router.delete("/director/:id", delete_controller.delete_director);
router.delete("/genre/:id", delete_controller.delete_genre);

//Update
// router.get("/:productId");
// router.put("/:productId");

module.exports = router;
