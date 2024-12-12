import mongoose from "mongoose";

const dbConnection = async () => {
  await mongoose
    .connect(process.env.MONGO_DB)
    .then(() => {
      console.log("MongoDB Connection Successful!");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default dbConnection;
