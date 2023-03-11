import express from "express";
import { config } from 'dotenv';
import path from "path";
const app =express();

import { executeStudentCrudOperations } from "./db/studentsCurd.js";

const port = process.env.PORT || 3000;


const __dirname=path.resolve();
// console.log(__dirname);

const static_path = path.join(__dirname, "/public");

console.log(static_path);
// app.use(express.static(static_pathRoot))
app.set("view engine", "html");

app.get("/", (req, res)=>{
    res.render("index");
})


app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
})

config();
await executeStudentCrudOperations();