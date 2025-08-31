
// const express = require("express");
// const app= express();
// const bodyparser = require('body-parser')
// const cors = require('cors');
// const userRoute = require("./routes/userRoute")
// const mongoose = require("mongoose");
// const errorMidd=require("./middleware/errorMiddleware")
// require("dotenv").config();

// // Body-parser middleware
// app.use(bodyparser.urlencoded({ extended: true }))
// app.use(bodyparser.json())
// app.use(cors());

// mongoose.connect(process.env.DBCON).then(()=>{
//   console.log("Database successfully Connected!!!");
// })


// app.use("/user", userRoute);

// app.get("/",(req,res)=>{
//   console.log("Somthing went wrong")
//   res.send("okk")
// })
// app.get("/about",(req,res,next)=>{
//   console.log("this is about page")
//   const err=new Error("about page error")
//   next(err);
//   res.send("okk")
// })
// app.get("/service",(req,res)=>{
//   try{
//      console.log("this is service page")
//     const err=new Error("service page error")
//     throw err
//     res.status(200).send("service page")
//   }
//   catch{
//      console.log(Error)
//      res.status(500).send("Internal server error!")
//   }
  
// })

// app.use(errorMidd)
// const Port = process.env.PORT || 8000

// app.listen(Port, ()=>{
//   console.log(`Server run on port ${Port}`);
// })



const express = require("express");
const app= express();
const bodyparser = require('body-parser')
const cors = require('cors');

const mongoose = require("mongoose");
const multer=require("multer")

require("dotenv").config();

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors());

mongoose.connect(process.env.DBCON).then(()=>{
  console.log("Database successfully Connected!!!");
})

const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"uploads"); //save files to upload directory
  },
  filename:(req,file,cb)=>{
    cb(null,file.originalname);  // keep original file name
  }
})
const upload=multer({storage:storage})
app.post("/upload",upload.single("file"),(req,res)=>{
  const filename=req.file.originalname;
  console.log("file upload hogi!")
  res,send({filename:filename})
})


const Port = process.env.PORT || 8000

app.listen(Port, ()=>{
  console.log(`Server run on port ${Port}`);
})