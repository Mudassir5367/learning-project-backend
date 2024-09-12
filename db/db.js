const mongoose = require('mongoose')
const dbUrl = "mongodb+srv://mudassirhussain32303:learning-project123@cluster0.aeeud.mongodb.net/learning-project?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(dbUrl,{}).then(()=>{
    console.log('Db Connected');    
}).catch((err)=>{
    console.log(err,'Db Not Connected');
    
})