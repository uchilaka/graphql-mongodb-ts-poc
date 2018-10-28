import "colors";
export { Mongoose, Model, Document, Schema } from "mongoose";
// import mongoose from "mongoose";
import { Mongoose } from "mongoose";

export const mongoose = new Mongoose();

// Mongo connection
const MONGODB_PORT = 27017;
mongoose.Promise = global.Promise;
mongoose
  .connect(
    `mongodb://localhost:${MONGODB_PORT}`,
    {
      useNewUrlParser: true,
      reconnectInterval: 1000, // reconnect every 1000ms
      reconnectTries: 5,
      user: "root",
      pass: "test"
    }
  )
  .then(
    () => console.log("MongoDB connection successful".bgGreen.black),
    (err) =>
      console.log(
        ["MongoDB connection failed:", String(err).bgRed.black].join(" ")
      )
  );

// export const connectedMongoose = mongoose;

export default mongoose;
