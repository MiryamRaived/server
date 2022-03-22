const express = require("express");
const mongoose = require("mongoose");
const itemController=require("./controllers/itemController");
const userController=require("./controllers/userController");
const winningController=require("./controllers/winningController");

const app = express();
mongoose.connect("mongodb://localhost:27017/chinese-sale-2022")
    .then(suc => console.log("mongo db connected"))
    .catch(err =>
        console.log(err)
    )
