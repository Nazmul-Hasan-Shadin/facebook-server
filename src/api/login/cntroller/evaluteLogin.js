
const autoScroll = require("./autoScroll");
const InformationSchema = require("../../../model/informationMode");
const run = require("./authenticate");





const evaluteLogin=async(req,res)=>{
   const {email,password}=req.body;
    try {
        console.log(email,password)
        const  loginInfo= await run(email,password)
         const result= await InformationSchema.create(loginInfo)
        res.json({message:result, success:true})
    } catch (error) {
      res.send(error.message)
    }
    
   
}

module.exports=evaluteLogin