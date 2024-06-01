const { Router } = require("express");
const router = Router();

const { register, login, getUser } = require("../Controllers/userController");
//user router
router.post("/register", register);
router.post("/login", login);
router.get("/currentuser/:userID", getUser);

module.exports = router;
