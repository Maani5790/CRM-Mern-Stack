import express from "express";
import { createPost, deletePost, getPost, updatePost } from "../controller/note-controller.js";
const noteRouter = express.Router();
import auth from "../middlewares/auth.js";

noteRouter.get("/", auth , getPost);
noteRouter.post("/", auth , createPost);
noteRouter.delete("/:id", auth , deletePost);
noteRouter.put("/:id", auth , updatePost);


export default noteRouter;