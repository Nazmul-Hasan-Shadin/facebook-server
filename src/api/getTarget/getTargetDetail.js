const InformationSchema = require("../../model/informationMode")

const getTarget=async(req,res)=>{
     console.log('inside getTarget')
 try {

    const result =await InformationSchema.find({})
    return result;
 } catch (error) {
    console.error("Error fetching data:", error.message);
     console.log(error.message)
 }
}
module.exports=getTarget