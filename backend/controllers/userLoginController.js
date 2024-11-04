const usersModel = require("../models/usersModel");

//
exports.userLogin = async (req, res, next) => {
  try {
    const userLoginDetails = req.body;
    const email = userLoginDetails.email;
    const password = userLoginDetails.password;
    const details = await usersModel.find({});
    let noData = true;
    details.forEach((data) => {
      if (data.email == email && data.password == password) {
        res.json({
          success: true,
          status:200,
          message: "Login successfully",
          email: data.email,
          name: data.name
        });
        noData = false;
      }
    });
    if (noData == true) {
      res.json({
        success: false,
        status:400,
        message: "Invaild Credentials",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
