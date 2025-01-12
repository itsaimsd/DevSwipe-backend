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




app.get

app.listen(3000, () => {
  console.log("server is successfully listening on port 3000.....");
});
