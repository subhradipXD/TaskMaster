const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const todoRoute = require("./Routers/todoRoute");
const userRoute = require("./Routers/userRoute");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.mongodb_url)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", todoRoute);
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("Route is working for TaskMaster!");
});

const PORT = process.env.port;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
