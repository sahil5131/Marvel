import express from "express";
import { config } from 'dotenv';
import path from "path";
import hbs from "hbs"
const app =express();

// import { executeStudentCrudOperations } from "./db/studentsCurd.js";
// import mongoose from "./db/conn.js";
// mongoose.connect('uri');

import main from "./db/atlas.js"

import Register from "./models/register.js";

const port = process.env.PORT || 3000;

const __dirname=path.resolve();
// console.log(__dirname);
const static_path = path.join(__dirname, "/public");
// console.log(static_path);
const viewsPath = path.join(__dirname, './templates/views')
// console.log(viewsPath);
const partialsPath = path.join(__dirname, './templates/partials')
// console.log(partialsPath);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res)=>{
    res.render("login.hbs");
})

app.get("/register", (req, res)=>{
    res.render("register.hbs");
})

app.post("/register", async(req, res)=>{
    try{
        // res.send(req.body.username);
        const password = req.body.password;
        const confirmpassword = req.body.confirmpassword;
        if(password===confirmpassword){
         const marvelUser = new Register({
            username: req.body.username,
            email:req.body.email,
            password:password,
            confirmpassword:confirmpassword
         })   
         const registered = await marvelUser.save();
         res.status(201).render("login.hbs");
        }
        else{
            res.send("password are not matching");
         }
        console.log(req.body.username);
    }
    catch(error){
        res.status(400).send(error);
    }
})

app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
})

// config();
// await executeStudentCrudOperations();