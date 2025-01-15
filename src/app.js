const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { userAuth } = require("./middlewares/auth");

app.use(express.json());
app.use(cookieParser());

// Signup API
app.post("/signup", async (req, res) => {
  // Validation of data
  try {
    validateSignUpData(req);
    const { firstName, lastName, emailId, password } = req.body;

    // Encrypt the password
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);

    // Creating new instance od user models
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });

    await user.save();
    res.send("User added succesfully");
  } catch (err) {
    res.status(400).send("Error : " + err.message);
  }
});

// Login API
app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid Credentials");
    }
    const isPasswordValid = await user.validatePassword(password);  
    if (isPasswordValid) {
      // Create a JWT Token

      const token = await user.getJWT();

      // console.log(token);

      // Add the token to cookies and send the response back to the user
      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
      });
      res.send("Login Succesfull!!!");
    } else {
      throw new Error("Invalid Credentials");
    }
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

// Profile API
app.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;

    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});
app.post("/sendConnectionRequest", userAuth, async (req, res) => {
  const user = req.user;
  // sending a connection request
  console.log("Sending a connection request");

  res.send(user.firstName + " sent the friend request");
});
connectDB()
  .then(() => {
    console.log("Database connection establised....");
    app.listen(3000, () => {
      console.log("server is successfully listening on port 3000.....");
    });
  })
  .catch((err) => {
    console.error("Database connot be connected", err);
  });
