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

////////////////////////////////////////////////////

// Handle Auth Middleware for all GET POST,....requests
app.use("/admin", (req, res, next) => {
  console.log("Admin auth is getting checked!");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
});

app.get("/user", (req, res) => {
  res.send("user Data Sent");
});
app.get("/admin/getAllData", (req, res) => {
  res.send("All Data sent");
});
app.get("/admin/deleteUser", (req, res) => {
  res.send("user is not authorized");
});

app.listen(3000, () => {
  console.log("server is successfully listening on port 3000.....");
});
