const express = require("express");
const router = express.Router();

//Index - users
router.get("/", (req, res) => {
    res.send("GET for users");
});

//Show - users
router.get("/:id", (req, res) => {
    res.send("GET for show user id");
});

//Post - users
router.get("/", (req, res) => {
    res.send("Post for users");
});

//Delete - users
router.get("/:id", (req, res) => {
    res.send("Delete for user id");
});

module.exports = router;