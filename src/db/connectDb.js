const { default: mongoose } = require('mongoose');

require('dotenv').config()
const connectToDb=()=>{
    let uri;
    if (process.env.ENVIRONMENT='DEVELOPMENT') {
        uri=process.env.DB_URI;
        uri=uri.replace('<username>',process.env.DB_NAME)
        uri=uri.replace('<password>',process.env.DB_PASS)
    }
    return uri

}


let connectToDatabase=async()=>{
    const connectDbUri= connectToDb()
    console.log('connectiong');
   await mongoose.connect(connectDbUri,{
         dbName:'facebook'
    })
    console.log('connected');
}

module.exports=connectToDatabase

