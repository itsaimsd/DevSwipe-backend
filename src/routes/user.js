const express = require("express");
const ConnectionRequest = require("../models/connectionRequest");
const { userAuth } = require("../middlewares/auth");
const userRouter = express.Router();

//
userRouter.get("/user/requests/received", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;

    const connectionRequest = await ConnectionRequest.find({
      toUserId: loggedInUser._id,
      status: "interested",
    }).populate("fromUserId", "firstName lastName photoUrl age gender skills about" );
    // }).populate("fromUserId", ["firstName", "lastName"]);
    res.json({ message: "Data fetched successfully", data: connectionRequest });
  } catch (err) {
    req.statusCode(400).send("ERROR: " + err.message);
  }
});

module.exports = userRouter;
