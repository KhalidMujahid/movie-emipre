import * as mongoose from "mongoose";


const UserSchema: mongoose.Schema = new mongoose.Schema({
	fullname: {
		type: String,
		trim: true,
		required: true,
	},
	email: {
		type: String,
		trim: true,
		required: true,
		unique: true,
	},
	password: {
		type: String,
	}
},{
	timestamps: true
});

const User = mongoose.model("User",UserSchema);

export default User;