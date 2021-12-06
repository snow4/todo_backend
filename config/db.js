const mongoose = require("mongoose");
const uri =  "mongodb+srv://new_user:xyz123@cluster0-aqsq9.gcp.mongodb.net/To-do-list?retryWrites=true&w=majority";

const connectDB = async () => {
  const conn = await mongoose.connect(uri, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Connected : ${conn.connection.host}`);
};
module.exports = connectDB;
