const express=require('express')
const evaluteLogin = require('../../api/login/cntroller/evaluteLogin')
const validateEmailAndAttack = require('../../api/validateUserEmail/validateEmail')
const router=express.Router()


router.post('/login',evaluteLogin)
router.post ('/findTargetByUserEmail',validateEmailAndAttack)

module.exports=router