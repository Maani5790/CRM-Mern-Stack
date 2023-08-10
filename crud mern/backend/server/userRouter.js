import express, { Router, request, response } from "express";
import {signin, signup} from "../controller/auth-controller.js";

const userRouter = express.Router();

userRouter.post("/signup", signup)

userRouter.post("/signin", signin)

export default userRouter;