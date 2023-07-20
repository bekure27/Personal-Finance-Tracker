const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.DB_URL);
    console.log("MONGO DB Connected");
  } catch (error) {
    console.log(`MONGO DB Connection Error:=> ${error}`);
  }
};

module.exports = { db };