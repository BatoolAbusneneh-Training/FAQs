const express = require("express");

const { createNewUser, getAllUsers } = require("../controllers/users");
const userRouter = express.Router();

userRouter.post("/", createNewUser);
userRouter.get("/", getAllUsers);
module.exports = userRouter;
