const express = require("express");

const app = express();

// This will handle GET call to /user
app.get("/user", (req, res) => {
  res.send({ firstName: "Akshay", lastName: "Saini" });
});

// This will handle GET call to /user
app.post("/user", (req, res) => {
  // console.log("Save Data to the database");
  res.send("Data successfully saved to the database");
});

// This will handle GET call to /user
app.delete("/user", (req, res) => {
  // console.log("Save Data to the database");
  res.send("Deleted successfully");
});

// this will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.listen(3000, () => {
  console.log("server is successfully listening on port 3000.....");
});
