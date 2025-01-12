const express = require("express");

const app = express();

// GET / User =>middleware chain => request handlet

// app.use("/", (req, res, next) => {
//   res.send("Handling / route");
//   next();
// });

// app.use(
//   "/user",

//   (req, res, next) => {
//     console.log("Handling the route user!!");
//     // res.send("1st response");
//     next();
//   },
//   (req, res, next) => {
//     console.log("Handling the route user 2!!");
//     // res.send(" 2nd response");
//     next();
//   },

//   (req, res, next) => {
//     console.log("Handling the route user 3!!");
//     console.log("This is request handler because it send request");
//     res.send(" 3rd response");
//     // next();
//   }
// );

app.get("/admin/getAllData", (req, res) => {
  // Logic of checking if the request is authorized
  const token = "XYZABCDEF";
  const isAdminAuthorized = token === "xyz";
  if (isAdminAuthorized) {
    res.send("All Data sent");
  } else {
    res.status(401).send("unauthorized user");
  }
});

app.get("/admin/deleteUser", (req, res) => {
  // Logic of checking if the request is authorized
  const token = "XYZABCDEF";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.send("user is not authorized");
  } else {
    res.status(401).send("unauthorized user");
  }
});

app.listen(3000, () => {
  console.log("server is successfully listening on port 3000.....");
});
