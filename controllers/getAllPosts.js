const AllPosts = require('../modal/all_posts');

const getAllPosts = async (req, res) => {
    try {
        const userId = req.user._id;
        const data = await AllPosts.find({ userId: req.user._id }).sort({ createdAt: -1 });
        
        return res.status(200).json({ success: true, data });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
};

module.exports = getAllPosts;
