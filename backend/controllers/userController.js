// const UserModel = require("../models/userModel");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

//  const userAuth=async(req, res)=>{
//  const token=req.header("x-auth-token");
//  const verified = jwt.verify(token, "shivani123");
//  console.log(verified.id);
//  const User = await UserModel.findById(verified.id);
//   res.send({user:User});
// }


// const userRegistration = async (req, res) => {
//     const { name, email, password } = req.body;

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const User = await UserModel.create({
//         name: name,
//         email: email,
//         password: hashedPassword
//     })
//    res.status(201).json({msg:"You are Succesfully Registered!"});
// }

// const userLogin = async (req, res) => {
 
//     const { email, password } = req.body;
   
//     const User = await UserModel.findOne({ email: email });

//     if (!User)
//         {
//            res.send("Invalid Email!");
//         }

//         const validPassword = await bcrypt.compare(password, User.password);

//         if (!validPassword)
//         {
//             res.send("Invalid Password!");
//         }
//        res.status(202).send({ msg: "You are successfully logged in!",
//       user: {
//         name: User.name,
//         email: User.email
//       }
//     });

//    const token = await jwt.sign({id:User._id}, "shivani123",  { expiresIn: '7 days' } )
     
//      res.send({token:token});
// };


// module.exports = {
//     userRegistration,
//     userLogin,
//     userAuth
// }









const UserModel = require("../models/userModel");
const ProfileModel=require("../models/profileModel");


const userSave=async(req,res)=>{
   const {username,email,firstname,lastname}=req.body;
   const User=await UserModel.create({
    username:username,
    email:email
   })
   console.log(User);
   const Profile=await ProfileModel.create({
      firstname:firstname,
      lastname:lastname,
      userid:User._id
   })
   res.send("okk");
}
const userDisplay=async(req,res)=>{
    const Data=await ProfileModel.find().populate("userid")
    res.send(Data);
}

module.exports = {
     userSave,
     userDisplay
}

