const express = require('express');
const { createOrders,orders, userOrders } = require('../controllers/ordersControllers');
const router= express.Router();

router.route('/create-orders').post(createOrders);
router.route('/orders').get(orders);
router.route('/user-orders').post(userOrders);

module.exports =router;