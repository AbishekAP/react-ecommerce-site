const usersModel = require("../models/usersModel");
//
exports.userRegisterController = async (req, res) => {
  try {
    const details = await usersModel.find({}, "-_id");
    const user = req.body;
    const email = user.email;
    let exitData = false;
    details.forEach((data) => {
      if (data.email == email) {
        exitData = true;
      }
    });
    if (exitData == false) {
      const name = user.name;
      const email = user.email;
      const password = user.password;
      const carts=[]
      await usersModel.create({ name, email, password,carts});
      res.json({
        success: true,
        status:200,
        message: "Signup succussfully",
        email,
        name,
      });
    } else {
      res.json({
        success: false,
        status:400,
        message: "given Details Already Exited ",
      });
    }
  } catch {
    res.json({
      success: false,
      status:400,
      message: "connection error ",
    });
  }
};
