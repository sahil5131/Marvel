import express from "express";
import { config } from 'dotenv';
import path from "path";
import hbs from "hbs"
const app =express();

import { executeStudentCrudOperations } from "./db/studentsCurd.js";

const port = process.env.PORT || 3000;


const __dirname=path.resolve();
// console.log(__dirname);

const static_path = path.join(__dirname, "/public");
// console.log(static_path);
const viewsPath = path.join(__dirname, './templates/views')
// console.log(viewsPath);
const partialsPath = path.join(__dirname, './templates/partials')
console.log(partialsPath);

app.set("view engine", "hbs");

app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
// app.set("views", path.join(__dirname, 'views'));
app.use(express.static('public'));

app.get("/", (req, res)=>{
    // console.log(req.params);
    res.render("index.hbs");
})


app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
})

config();
await executeStudentCrudOperations();