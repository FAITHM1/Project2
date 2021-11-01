///dependencies

const express = require("express");
const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
//////////////////////////////////////
// create router
///////////////////////////////////////
const router = express.Router();

////
//routes
router.get("/signup", (req, res) => {
  res.render("user/signup.liquid");
});
//saves to the database
router.post("/signup", async (req, res) => {
  req.body.password = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  );
  //saves to database
  User.create(req.body)
    .then((user) => {
      console.log(user);
      res.redirect("/user/login");
    })
    .catch((error) => {
      res.json({ error });
    });
});

//login
router.get("/login", (req, res) => {
  res.render("user/login.liquid");
});

router.post("/login", async (req, res) => {
  //destruture
  const { username, password } = req.body;
  User.findOne({ username })
    .then(async (user) => {
      if (user) {
        const result = await bcrypt.compare(password, user.password);
        if (result) {
          req.session.username = username;
          req.session.loggedIn = true;
          res.redirect("/entry");
        } else {
          res.json({ error: "password doesnt match" });
        }
      } else {
        res.json({ error: "user doesnt exist" });
      }
    })

    .catch((error) => {
      res.json({ error });
    });
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
});
module.exports = router;
