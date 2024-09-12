const User = require('../modal/register')
const bcrypt = require('bcrypt');


const regiter = async(req,res)=>{
    const {fullname, username, phone, email,password, cPassword} = req.body;
    if(!fullname || !username || !password || !cPassword || !email || !phone){
        return res.status(400).json({msg: 'Please fill all fields'})
    }
    if (password !== confirmPassword) {
        return res.status(400).json({ msg: 'Passwords do not match' });
    }
    try {
        const loginUser = await User.findOne({email: email})
        if(loginUser){
            return res.status(200).json({msg:'user already exists'})
        }else{
            const user = new User({fullname, username, phone, email, password, cPassword})
            
            await user.save()
            console.log('user data added to the database');
            res.status(200).json({msg: 'User registered successfully'})
        }
    } catch (error) {
        console.error('Error during registration:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }

}
module.exports = regiter;