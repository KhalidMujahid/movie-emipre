import * as mongoose from "mongoose";

async function connectDB() {
  return await mongoose.connect(
    (process.env.NODE_ENV as string) === "development"
      ? (process.env.DB_LOCAL as string)
      : (process.env.DB_GLOBAL as string)
  );
}

export default connectDB;
