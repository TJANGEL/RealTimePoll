const mongoose = require("mongoose");

// map global promises
mongoose.Promise = global.Promise;

// mongoose connect
mongoose
  .connect("mongodb://tom:angeloni1@ds163044.mlab.com:63044/realtimepoll")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
