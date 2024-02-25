const express = require("express");
const router = express.Router();

//Index
router.get("/", (req, res) => {
    res.send("GET for posts");
});

//Show
router.get("/:id", (req, res) => {
    res.send("GET for show post id");
});

//Post
router.get("/", (req, res) => {
    res.send("Post for posts");
});

//Delete
router.get("/:id", (req, res) => {
    res.send("Delete for post id");
});

module.exports = router;