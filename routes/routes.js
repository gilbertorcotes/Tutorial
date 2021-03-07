const express = require("express");
const post = require("../models/Post");
const router = express.Router();

router.get("/posts", async(req, res) => {
    const post = await Post.find();
    res.send(post)
})

router.post("/posts", async (req, res) => {
	const post = new Post({
		title: req.body.title,
		content: req.body.content,
	})
	await post.save()
	res.send(post)
})

module.exports = router;