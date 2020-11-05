const mongoose = require("mongoose");

exports.connectToDB = async () => {
  await mongoose.connect("mongodb://mongo:27017/CG-test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongoDb");
};
