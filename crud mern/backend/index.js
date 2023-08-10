import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import connection from './database/db.js';
import Routes from "./server/route.js";
import noteRouter from './server/noteRouter.js';
import userRouter from './server/userRouter.js';
import followRouter from './server/followup.js';
import callRouter from './server/call.js';
import leadRouter from './server/lead.js';


const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log("HTTP Method" + req.method + "Url" + req.url);
  next();
})

app.use("/users", userRouter);
app.use("/note", noteRouter);
app.use("/followup", followRouter);
app.use("/calls", callRouter);
app.use("/leads", leadRouter);


dotenv.config();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/", Routes);

const PORT = '8000';

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username, password);
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));