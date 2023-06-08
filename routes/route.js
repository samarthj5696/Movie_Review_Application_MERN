const router = require("express").Router();
const controller = require("../controller/Controller.js");
router.post("/");
router.get("/", controller.movie_all);
router.get("/:productId");
router.put("/:productId");
router.delete("/:productId");
module.exports = router;
