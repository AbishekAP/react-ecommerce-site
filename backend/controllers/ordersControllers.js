const orderModel = require("../models/ordersModel");
const { format } = require("date-fns");

exports.createOrders = (req, res, next) => {
  const email = req.body.email;
  const orderItems = req.body.orderItems;
  const deliveryDetails = req.body.deliveryDetails;
  if (orderItems && deliveryDetails) {
    try {
      const now = new Date();
      const nowDate = format(now, "yyyy-MM-dd HH:mm:ss");
      orderModel.create({ email, orderItems, deliveryDetails, nowDate });
      res.json({
        seccuss: true,
        message: "place order successfully",
        status: "200",
      });
    } catch (error) {
      res.json({
        seccuss: false,
        message: "try Again",
        status: "400",
        error,
      });
    }
  } else {
    res.json({
      seccuss: false,
      message: "no details..try again",
      status: "400",
    });
  }
};
exports.orders = async (req, res, next) => {
  try {
    const orders = await orderModel.find({}).lean();
    res.json({
      seccuss: true,
      message: "get your orders successfully",
      status: "200",
      orders,
    });
  } catch (error) {
    res.json({
      seccuss: false,
      message: "try Again",
      status: "400",
      error,
    });
  }
};
exports.userOrders = async (req, res, next) => {
  const email = req.body.email;
  if (email) {
    try {
      const orders = await orderModel.find({}).lean();
      const userOrders = [];
      orders.forEach((order) => {
        if (order.email == email) {
          userOrders.push(order);
        }
      });
      res.json({
        seccuss: true,
        message: "get your orders successfully",
        status: "200",
        userOrders,
      });
    } catch (error) {
      res.json({
        seccuss: false,
        message: "try Again",
        status: "400",
        error,
      });
    }
  }
  else{
    res.json({
      seccuss: false,
      message: "try Again",
      status: "400"
    });
  }
};
