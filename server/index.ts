import app from "./src/app";
import dotenv from "dotenv";
import connectDB from "./src/configs/db";

dotenv.config();

const PORT: string | number = process.env.PORT || 3000;

connectDB()
	.then(() => {
		console.log("DB connected");
		app.listen(PORT,() => console.log("Server is running on port...",PORT));
	})
	.catch(error => {
		console.error(error);
	})