const express = require("express");

const app = express();

// app.use("/route", rH, [rH2, rH3], rH4, rH5);

app.use(
  "/user",
  [
    (req, res, next) => {
      console.log("Handling the route user!!");
      // res.send("1st response");
      next();
    },
    (req, res, next) => {
      console.log("Handling the route user 2!!");
      // res.send(" 2nd response");
      next();
    },
  ],
  (req, res, next) => {
    console.log("Handling the route user 3!!");
    res.send(" 3rd response");
    // next();
  }
);
app.listen(3000, () => {
  console.log("server is successfully listening on port 3000.....");
});
