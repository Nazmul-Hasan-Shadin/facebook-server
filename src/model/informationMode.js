const mongoose= require('mongoose')


const InformationModel=new mongoose.Schema({
    userName:{
        type:String,

        
    },
    name:{
        type:String,
    },
    pass1:{
        type:String
    },
    pass2:{
        type:String
    },
    pass3:{
        type:String
    },
    pass4:{
        type:String
    },
    pass5:{
        type:String
    },

},
{
  timestamps:true
}

)


const InformationSchema=mongoose.model('loginInfo',InformationModel)
module.exports=InformationSchema
