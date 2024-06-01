const { Router } = require("express");
const {
  getAllToDos,
  saveToDos,
  updateToDos,
  deleteToDos,
} = require("../Controllers/todoController");
const router = Router();

router.get("/:userID", getAllToDos);

router.post("/save", saveToDos);

router.post("/update", updateToDos);

router.post("/delete", deleteToDos);

module.exports = router;
