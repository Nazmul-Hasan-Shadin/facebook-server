 
 const express=require('express')
const getTarget = require('../../api/getTarget/getTargetDetail')
 const router=express.Router()


router.get('/targets',getTarget)

module.exports=router