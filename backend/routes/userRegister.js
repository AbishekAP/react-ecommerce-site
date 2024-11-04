const express = require("express");
const {userRegisterController}=require('../controllers/userRegisterController')
const router = express.Router();

router.route('/user-register').post(userRegisterController);

module.exports = router;