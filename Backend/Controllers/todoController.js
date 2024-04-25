const todoModel = require("../Models/todoModel");

module.exports.getAllToDos = async (req, res) => {
  const allToDos = await todoModel.find();
  res.send(allToDos);
};

module.exports.saveToDos = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newToDo = new todoModel({
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
