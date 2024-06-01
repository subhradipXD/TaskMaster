const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = require("../Models/userModel");
const todoModel = require("../Models/todoModel");

module.exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      return res.json({
        error: true,
        message: "you already have an account, please login!",
      });
    }
    const hashPWD = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      email,
      password: hashPWD,
    });
    await newUser.save().then(() => {
      console.log("new user added successfully");
    });

    return res.json({ error: false, message: "new user added" });
  } catch (e) {
    console.log(e);
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      res.json({ error: true, message: "User doesn't exist" });
    }
    const isPwdValid = await bcrypt.compare(password, user.password);
    if (!isPwdValid) {
      res.json({ error: true, message: "Password Incorrect" });
    }
    const token = jwt.sign({ id: user._id }, process.env.HashID);
    res.json({
      error: false,
      message: "Login success",
      response: {
        user: user,
        token: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getUser = async (req, res) => {
  try {
    const hashID = req.params.userID;
    // console.log("in getUser");
    // console.log(hashID);
    var decoded = jwt.verify(hashID, process.env.HashID);
    // console.log(decoded);
    const user = decoded.id;
    const UserTodos = await todoModel.find({ user });

    res.status(200).json({
      error: false,
      response: {
        user,
        UserTodos,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
