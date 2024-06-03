const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/userModel");
const AllTask = require("../model/dataModel");
const loginController = async (req, res) => {
  const { email, password } = req.body;

  const findUser = await User.findOne({ email });
  console.log("myuser", findUser);
  if (findUser.email == email) {
    bcrypt.compare(password, findUser.password, function (err, result) {
      var privateKey = "ghostisnneme";
      var token = jwt.sign(
        { id: findUser._id, email: findUser.email },
        privateKey,
        {
          expiresIn: 60 * 60,
        }
      );
      console.log("token", token);
    });
  }

  res.send("helo");
};
module.exports = loginController;
