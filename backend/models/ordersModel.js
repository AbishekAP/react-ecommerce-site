const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  email: String,
  orderItems: Array,
  deliveryDetails: Object,
  date: String,
});

const orderModel = mongoose.model("order", orderSchema);
module.exports = orderModel;
