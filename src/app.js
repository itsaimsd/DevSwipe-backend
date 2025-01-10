const express = require("express");

const app = express();

app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Akshay", lastName: "Saini" });
});
app.delete("/user", (req, res) => {
  res.send("succesful delete");
});

app.listen(3000, () => {
  console.log("server is successfully listening on port 3000.....");
});
