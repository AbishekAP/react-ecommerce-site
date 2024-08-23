const usersModel = require("../models/usersModel");

exports.addCart = async (req, res, next) => {
  const email = req.body.email;
  const cartItem = req.body.cartItem;
  if (email && cartItem) {
    try {
      const users = await usersModel.find({});
      users.forEach((user) => {
        if (user.email == email) {
          user.carts.push(cartItem)
        }
    });
      res.json({
        seccuss: true,
        message: "add cart successfully",
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
exports.userCart = async (req, res, next) => {
const email = req.body.email;
  try {
    const users = await usersModel.find({});
    const userCart = [];
    users.forEach((user) => {
      if (user.email == email) {
        user.carts && userCart.push(user.carts);
      }
    });
    res.json({
      seccuss: true,
      message: "get your carts successfully",
      status: "200",
      userCart,
    });
  } catch (error) {
    res.json({
      seccuss: false,
      message: "try Again",
      status: "400",
      error
    });
  }
};
