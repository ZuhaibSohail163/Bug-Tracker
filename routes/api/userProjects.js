const router = require("express").Router();
const userProjectController = require("../../controllers/userProjectController");
const authorization = require("../../middleware/authorization");

// Matches route with "/api/userProjects/"
router.route("/");

// Matches route with "/api/userProjects/:projectId"
router
  .route("/:projectId")
  .post(authorization, userProjectController.assignUser)
  .get(authorization, userProjectController.getProjectUsers)
  .delete(authorization, userProjectController.removeAllUsers);

// Matches route with "/api/userprojects/:projectId/:userId"
router
  .route("/:projectId/:userId")
  .delete(authorization, userProjectController.removeUser);

module.exports = router;
