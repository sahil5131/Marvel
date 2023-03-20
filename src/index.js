import express from "express";
import path from "path";
import hbs from "hbs"
import bodyParser from "body-parser"
import {mongoose} from "mongoose"

// import main from "./db/atlas.js"
import user from "./models/register.js";

const app =express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/Marvel');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})

const __dirname=path.resolve();
// console.log(__dirname);
const static_path = path.join(__dirname, "/public");
// console.log(static_path);
const viewsPath = path.join(__dirname, './templates/views')
// console.log(viewsPath);
const partialsPath = path.join(__dirname, './templates/partials')
// console.log(partialsPath);

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))
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
    // try{
        const password = req.body.password;
        const confirmpassword = req.body.confirmpassword;
        if(password === confirmpassword){
            const users = new user(req.body);
            db.collection('users').insertOne(users, function(err, collection){
                if(err) throw err;
                console.log("record inserted successfully");
            });
            return res.redirect('login.hbs');
        }
        else{
            console.log('password not same');
        }
        
})

app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
})

