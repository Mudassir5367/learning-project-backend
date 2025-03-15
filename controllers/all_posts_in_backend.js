const Posts = require('../modal/all_posts');
const mongoose = require('mongoose');

const allPosts = async (req, res) => {
    try {
        const { title, id, body } = req.body;

        if (!id || isNaN(id)) {
            return res.status(400).json({success: false, error: "Invalid or missing ID" });
        }
        if (!req.user || !req.user._id) {
            return res.status(401).json({success: false, error: "Unauthorized: User ID missing" });
        }

        const userId = req.user._id; 

        // Check if post already exists
        const existingPost = await Posts.findOne({ id: id });
        if (existingPost) {
            console.log('Post with the same ID already exists');
            return res.status(400).json({success: false, msg: 'Post with the same ID already exists' });
        }

        // Create and save new post
        const newPost = new Posts({ 
            title,
            id: Number(id),
            userId, 
            body,
        });

        await newPost.save();
        return res.status(201).json({ message: 'Custom post created successfully' });

    } catch (error) {
        console.error('Error creating custom post:', error.message);
        return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};

module.exports = allPosts;
