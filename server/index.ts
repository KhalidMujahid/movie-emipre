import app from "./src/app";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import connectDB from "./src/configs/db";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SEC,
});

const PORT: string | number = process.env.PORT || 3000;

connectDB()
	.then(() => {
		console.log("DB connected");
		app.listen(PORT,() => console.log("Server is running on port...",PORT));
	})
	.catch(error => {
		console.error(error);
	})