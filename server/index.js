import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
// components
import Connction from "./database/db.js";
import Router from "./routes/route.js";


dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', Router)


const PORT = 8000;
const username = process.env.DB_UDER
const password = process.env.DB_PASS


Connction(password,username);
app.listen(PORT, () =>
  console.log(`server is runing successfully on PORT ${PORT}`)
);
