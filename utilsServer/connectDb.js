const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

async function connectDb() {
  try {
    await mongoose.connect("mongodb+srv://anikrchate:ue51a7sHBtES7YrY@cluster0.u3eei0u.mongodb.net/test3", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Mongodb connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDb;
