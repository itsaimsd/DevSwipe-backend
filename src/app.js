const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");

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

// app.use("/admin", adminAuth);
// app.get("/user/login", (req, res) => {
//   res.send("Login Succesfull");
// });
// app.get("/user/data", userAuth, (req, res) => {
//   res.send("user Data Sent");
// });
// app.get("/admin/getAllData", (req, res) => {
//   res.send("All Data sent");
// });
// app.get("/admin/deleteUser", (req, res) => {
//   res.send("user is not authorized");
// });

/////////////////////////////////////

app.use("/", (err, req, res, next) => {
  if (err) {
    // log your error
    res.status(500).send("something went wrong");
  }
});
app.get("/getUserData", (req, res) => {
  // Logic of DB call and get user Data

  // try {
  throw new Error("dhhf");
  res.send("User Data Sent");
  // } catch (err) {
  res.status(500).send("Some Error contact support team");
  // }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    // log your error
    res.status(500).send("something went wrong");
  }
});
app.listen(3000, () => {
  console.log("server is successfully listening on port 3000.....");
});
