 const mongoose=require("mongoose")
 const autherSchema=new mongoose.Schema({
     autherrname:String,
     email:String,
     booksid:{type:mongoose.Schema.Types.ObjectId, ref:"book"}
 })
  module.exports=mongoose.model("user",autherSchema)