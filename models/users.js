const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Admin Schema
const AddUserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  username:{
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }

});

module.exports = UserSchema = mongoose.model(
  "Users",
  AddUserSchema
);
