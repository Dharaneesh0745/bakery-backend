import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://dharaneesh0745:dhoni@cluster0.u9zdrbb.mongodb.net/food"
    )
    .then(() => console.log("DB Connected"));
};
