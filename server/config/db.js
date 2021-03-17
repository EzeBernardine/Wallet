require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = async () => {
  const dbConnect = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Connected: ${dbConnect.connection.host}`);
};



module.exports = connectDB;
