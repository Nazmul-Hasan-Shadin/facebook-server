const express=require('express')
const evaluteLogin = require('../../api/login/cntroller/evaluteLogin')
const router=express.Router()


router.post('/login',evaluteLogin)

module.exports=router