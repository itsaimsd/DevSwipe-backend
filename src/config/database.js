const mongoose = require("mongoose");
// database
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://itsaimsd:c6QlvjSabP804nxP@namastenode.uieky.mongodb.net/devTinder"
  );
};  

module.exports = connectDB;
