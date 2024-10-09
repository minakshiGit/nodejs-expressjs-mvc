const express = require("express");
const {
    handleGetAllUsers,
    handleGetUserByID,
    handleUpdateUserByID,
    handleRemoveUserById,
    handleCreateUserById,
} = require("../controllers/user");
//Routes
const router = express.Router();
//router.get("/", handleGetAllUsers)

//Grouping of routes
router.route("/")
.get(handleGetAllUsers)
.post(handleCreateUserById)

router
.route("/:id")
.get(handleGetUserByID)
.patch(handleUpdateUserByID)
.delete(handleRemoveUserById)
//router.post(handleCreateUserById)
module.exports = router;