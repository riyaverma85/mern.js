
const errorMidware=((err,req,res,next)=>{
  console.log(err.message)
      res.status(500).send(err.message)
})
module.exports=errorMidware;