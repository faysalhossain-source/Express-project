const express = require("express");
const router = express.Router();


const userController = require("../controllers/userController");

// Routes mapping
router.get("/", userController.getAlluser);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);

module.exports = router;
