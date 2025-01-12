const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("Handling the route user!!");
    res.send("1st response");
    next();
  },
  (req, res) => {
    console.log("Handling the route user 2!!"); 
    res.send(" 2nd response");
  }
);
app.listen(3000, () => {
  console.log("server is successfully listening on port 3000.....");
});
