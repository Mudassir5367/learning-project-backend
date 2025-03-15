const User = require('../modal/register')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const login = async (req, res) =>{
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email:email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const payload = { _id: user._id };
        const token = jwt.sign(payload, 'SECRET_KEY');

        res.status(200).json({ 
            success:true,
            token,
            username: user.username,
            fullname: user.fullname,
            _id: user._id
         });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
module.exports = login;