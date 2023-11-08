import { Request, Response, NextFunction } from "express";
import User from "../models/user";
import * as jwt from "jsonwebtoken";

// create user
async function createUser(req: Request, res: Response, next: NextFunction){
	try{

		const { fullname,email,password } = req.body;

		// check if email exit
		const emailExit = await User.findOne({ email });
		if(emailExit) return res.status(400).send({ message: "An account already exit with the given email address"});

		await User.create({ fullname,email,password })
			.then(() => res.status(201).send({ message: "Account created" }))
			.catch(() => res.status(400).send({ message: "An error occured while creating account. please try again later"}))

	} catch(error){
		next(error);
	}
}

// login user
async function loginUser(req: Request, res: Response, next: NextFunction){
	try{

		const { email,password: pass } = req.body;

		// check if does not exit
		const emailDoesNot = await User.findOne({ email });
		if(!emailDoesNot) return res.status(400).send({ message: "Invalid email or password" });

		// check if password are same
		if(emailDoesNot.password !== pass) return res.status(400).send({ message: "Invalid email or passowrd" });
          
        const token = jwt.sign({ id: emailDoesNot._id, fullname: emailDoesNot.fullname},process.env.SEC as string);

        const { password, ...others } = req.body;
        return res.status(200).send({token,...others});


	} catch(error){
		next(error);
	}
}


export { createUser,loginUser };