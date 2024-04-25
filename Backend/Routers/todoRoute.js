const {Router} = require('express');
const { getAllToDos, saveToDos } = require('../Controllers/todoController');
const router = Router();


router.get('/', getAllToDos)

router.post('/save', saveToDos)

module.exports = router;