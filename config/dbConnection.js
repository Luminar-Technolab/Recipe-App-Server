const mongoose = require('mongoose')
const connectionString = process.env.CONNECTIONSTRING
mongoose.connect(connectionString).then(res=>{
    console.log(`DataBase connected successfully with CookPedia Server App`);    
}).catch(err=>{
    console.log("Database connection failed!!!");
    console.log(err)    
})