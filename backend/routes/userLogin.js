const express = require("express");
const {userLogin}=require('../controllers/userLoginController')
const router = express.Router();

router.route('/user-login').post(userLogin)

module.exports = router;