import express from "express";
import { addMember, deleteMember, editMember } from "../controller/followup-controller.js";
const followRouter = express.Router();



followRouter.post("/add", addMember);
followRouter.delete("/:id", deleteMember);
followRouter.put("/:id", editMember);

export default followRouter;