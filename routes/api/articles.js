const router = require("express").Router();
const articlesController = require("../../controllers/articleController");

// Matches with "/api/article"
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

// Matches with "/api/article/:id"
router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;
