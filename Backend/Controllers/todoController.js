const todoModel = require("../Models/todoModel");
const jwt = require("jsonwebtoken");
module.exports.getAllToDos = async (req, res) => {
  const hashID = req.params.userID;
  var decoded = jwt.verify(hashID, process.env.HashID);
  console.log("decod", decoded);
  const userID = decoded.id;
  console.log(userID);
  console.log("in getall todos", userID);
  const allToDos = await todoModel.find({ userId: userID });
  console.log(allToDos);
  res.send(allToDos);
};

module.exports.saveToDos = async (req, res) => {
  try {
    const { user, title, description } = req.body;
    console.log(user);
    const userId = user;
    const newToDo = new todoModel({
      userId,
      title,
      description,
    });
    await newToDo.save().then(() => {
      console.log("new todo added successfully");
    });

    res.send("new todo added successfully!");
  } catch (e) {
    console.log(e);
  }
};

module.exports.updateToDos = async (req, res) => {
  try {
    const { _id, title, description } = req.body;
    const updateToDo = await todoModel.findByIdAndUpdate(
      _id,
      { title, description },
      { new: true }
    );

    if (updateToDo) {
      console.log("updated successfully");
      res.send("updated successfully!");
    } else {
      console.log("Todo not found");
      res.status(404).send("Todo not found");
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports.deleteToDos = async (req, res) => {
  try {
    const { _id } = req.body;
    const deletedToDo = await todoModel.findByIdAndDelete(_id);

    if (deletedToDo) {
      console.log("deleted successfully");
      res.send("deleted successfully!");
    } else {
      console.log("Todo not found");
      res.status(404).send("Todo not found");
    }
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server Error");
  }
};
