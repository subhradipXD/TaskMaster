const { Router } = require("express");
const router = Router();

const { register, login } = require("../Controllers/userController");
//user router
router.post("/register", register);
router.post("/login", login);

module.exports = router;
