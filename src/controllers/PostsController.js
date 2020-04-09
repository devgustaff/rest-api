const Post = require("../models/Post");

module.exports = {
  showAll: async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (error) {
      res.json({ message: error });
    }
  },

  showPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.json(post);
    } catch (error) {
      res.json({ message: error });
    }
  },

  add: async (req, res) => {
    const post = new Post({
      title: req.body.title,
      description: req.body.description,
    });

    try {
      const savePost = await post.save();
      res.json(savePost);
    } catch (error) {
      res.json({ message: error });
    }
  },

  delete: async (req, res) => {
    try {
      const removedPost = await Post.remove({ _id: req.params.id });
      res.json(removedPost);
    } catch (error) {
      res.json({ message: error });
    }
  },

  update: async (req, res) => {
    try {
      const updatedPost = await Post.updateOne(
        { _id: req.params.id },
        { $set: { title: req.body.title } }
      );
      res.json(updatedPost);
    } catch (error) {
      res.json({ message: error });
    }
  },
};
