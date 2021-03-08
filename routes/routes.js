const express = require("express");
const Post = require("../models/Post");
const Product = require("../models/product");
const router = express.Router();

router.get("/posts", async(req, res) => {
    const post = await Post.find();
    res.send(post)
})

router.post("/posts", async (req, res) => {
	try {
		const post = new Post({
			title: req.body.title,
			content: req.body.content,
		})
		await post.save()
		res.send(post)
	} catch (error) {
		res.status(409).json(
			{
				message: 'ocurrió un error',
				detail: JSON.stringify(error)
			}
		);
	}
})

module.exports = router;