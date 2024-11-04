const express = require('express');
const { addCart,userCart } = require('../controllers/cartControllers');
const router= express.Router();

router.route('/add-cart').post(addCart);
router.route('/user-cart').post(userCart);

module.exports =router;