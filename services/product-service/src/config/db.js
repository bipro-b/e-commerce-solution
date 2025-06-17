import mongoose from 'mongoose';
import colors from 'colors';
import dotenv from 'dotenv';
dotenv.config();
export const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log(`Connected to MongoDB!`.green.bold);
    })
    .catch((err) => {
      console.log(err);
    });
};
