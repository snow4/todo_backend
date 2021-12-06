const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Admin Schema
const AddListSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // username: {
  //   type: String,
  //   required: true,
  // },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }

});

module.exports = ListSchema = mongoose.model(
  "Lists",
  AddListSchema
);
