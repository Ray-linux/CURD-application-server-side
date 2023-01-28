// const mongoose = require("mongoose");
import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/curdapp", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log("connection is succesfull")
  } catch (e) {
    console.log("error whike connecting the database", e);
  }
}


export default connection;
