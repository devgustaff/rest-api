const express = require("express");
const router = express.Router();
const PostsController = require("../controllers/PostsController");

// All posts
router.get("/", PostsController.showAll);

// Specific post
router.get("/:id", PostsController.showPost);

// Add post
router.post("/", PostsController.add);

// Delete post
router.delete("/:id", PostsController.delete);

// Update a post
router.patch("/:id", PostsController.update);

module.exports = router;
