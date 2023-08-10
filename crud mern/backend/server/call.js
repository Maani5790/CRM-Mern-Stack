import express from "express";
import  callDetails  from "../controller/call-controller.js";
const callRouter = express.Router();


callRouter.post("/adds", callDetails);

export default callRouter;