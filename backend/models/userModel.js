// const mongoose= require("mongoose");
// const userSchema= new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String
// })


// module.exports = mongoose.model("user", userSchema);










const mongoose= require("mongoose");
const userSchema= new mongoose.Schema({
    username:String,
    email:String,
   
})


module.exports = mongoose.model("user", userSchema);