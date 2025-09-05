
const autherModel=require("../models/autherModel")
const bookModel=require("../models/bookModel")

const addAuther=async(req,res)=>{
    const{authername,email,bookname,price}=req.body
    const book=await bookModel.create({
        bookname:bookname,
        price:price
    })
    const auther=await autherModel.create({
        authername:authername,
        email:email,
        // booksid:[]
    })
    await autherModel.findByIdAndUpdate(auther._id,{$push:{booksid:book,_id}})
    res.send("data save")
}
module.exports={
    addAuther
}