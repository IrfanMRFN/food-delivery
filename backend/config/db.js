import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://food-del:fooddelpass@cluster0.mpweh9v.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB Connected"));
};
