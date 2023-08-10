import express from "express";
import { addLeads, deleteLeads, editLeads } from "../controller/leads-controller.js";
const leadRouter = express.Router();

leadRouter.post("/add", addLeads);
leadRouter.delete("/:id", deleteLeads);
leadRouter.put("/:id", editLeads);

export default leadRouter;