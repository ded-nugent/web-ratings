const router = require("express").Router();
const websitesController = require("../../controllers/websitesController");

router.route("/")
  .get(websitesController.findAll)
  .post(websitesController.create);


router.route("/:id")
  .get(websitesController.findById)
  .put(websitesController.update)
  .delete(websitesController.remove);

  router.route("/:title")
  .get(websitesController.findByTitle)

module.exports = router;
