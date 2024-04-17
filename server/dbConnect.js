import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "GoogleDocsClone",
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error in connecting Database");
  }
};
