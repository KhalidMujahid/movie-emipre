import { Router } from "express";
import { createUser,loginUser } from "../controllers/user";

const userRouter: Router = Router();

// POST: create user
userRouter.post("/register", createUser);


// POST: login user
userRouter.post("/login", loginUser);

export default userRouter;