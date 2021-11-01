//import deps
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const path = require("path");
const ItemRouter = require("./controller/item");
const userRouter = require("./controller/user");
const session = require("express-session");
const mongoStore = require("connect-mongo");
//////
const liquid = require("liquid-express-views");
const viewsFolder = path.resolve(__dirname, "views/");

//app object
const app = liquid(express(), { root: viewsFolder });

/////////
//middlware
app.use(morgan("tiny"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
//user routes
app.use(
  session({
    secret: process.env.SECRET,
    store: mongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
    resave: false,
  })
);
//route
app.get("/", (req, res) => {
  res.render("Index.liquid");
});
//routes
app.use("/entry", ItemRouter);
app.use("/user", userRouter);

// listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
