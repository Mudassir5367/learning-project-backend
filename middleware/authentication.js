const jwt = require('jsonwebtoken');
// require('dotenv').config(); // Load environment variables

const authentication = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'Access Denied' });

    const token = authHeader.split(' ')[1]; 
    console.log('token', token);
    

    try {
        const verified = jwt.verify(token, 'SECRET_KEY');
        req.user = verified;
        next();
    } catch (error) {
        console.log("JWT Verification Error: ", error.message);
        res.status(400).json({ message: 'Invalid Token' });
    }
};

module.exports = authentication;
