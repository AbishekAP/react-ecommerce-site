const productModel = require("../models/productsModel");

exports.getProducts = async (req, res, next) => {
  const query = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};
  const products = await productModel.find(query).lean();
  res.json({
    seccuss: true,
    message: "get Products Seccussfully",
    products,
  });
};

exports.getSingleProduct = async (req, res, next) => {
  const product = await productModel.findById(req.params.id);
  res.json({
    seccuss: true,
    message: "get single Product Seccussfully",
    product,
  });
};
