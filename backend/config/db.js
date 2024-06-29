import mongoose from "mongoose";

const MONGODB = process.env.MONGODB;

export const connectDB = async () => {
  await mongoose.connect(MONGODB).then(() => console.log("DB Connected"));
};
