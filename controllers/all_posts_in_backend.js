const AllPosts = require('../modal/all_posts');

const allPosts = async (req, res) => {
    try {
        let allPosts = req.body;
        allPosts = Array.isArray(allPosts) ? allPosts : [allPosts];
        
        const data = [];
        
        for (const post of allPosts) {
            const savedPost = await AllPosts.findOneAndUpdate(
                { id: post.id }, 
                post,
                { upsert: true, new: true, setDefaultsOnInsert: true } 
            );
            data.push(savedPost);
        }
        
        if (data.length > 0) {
            return res.status(201).json({ message: "Posts added/updated successfully", success: true });
        } else {
            return res.status(200).json({ message: "No new Post was added (duplicates found)", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: "Error adding posts", error });
    }
};

module.exports = allPosts;
