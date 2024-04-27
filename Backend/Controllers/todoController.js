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
