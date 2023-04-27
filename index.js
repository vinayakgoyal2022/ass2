const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const { check, validationResult } = require("express-validator");
const mongoose = require("mongoose");
const User = require("./models");

mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
  console.log("DB CONNECTED");
});

app.use(bodyparser.json());

// validation of data
app.post(
  "/form",
  [
    check("password", "password length should be 8 char long").isLength({
      min: 8,
    }),
  ],
  (req, res) => {
    const user = new User(req.body);
    user.save();

    const errors = validationResult(req);

    //check foe error and response to frontend dev

    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      res.send("all information is validated");
    }
  }
);

app.listen(3000, function (error) {
  if (error) {
    return "error";
  }
  console.log("server is running at 3000");
});
