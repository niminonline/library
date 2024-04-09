import mongoose from "mongoose";
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    if (process.env.mongo_url) {
      await mongoose.connect(process.env.mongo_url);
      console.log("database connected successfully");
    } else {
      console.error("Error in mongodb connection url");
    }
  } catch (error) {
    console.error("Error while connecting db", error);
  }
};

export default connectDB;
