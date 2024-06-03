const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const registrationController = (req, res) => {
  const { name, email, password } = req.body;
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    const user = new userModel({
      name: name,
      email: email,
      password: hash,
    });
    user.save().then(() => {
      console.log(`${name} is registerd`);
    });
  });
};

module.exports = registrationController;
