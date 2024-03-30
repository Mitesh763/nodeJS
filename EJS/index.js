const express = require('express');
const app =  express();
const path = require('path');

const port =8080;

app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/rolldice",(req,res)=>{
    let diceNum = Math.floor(Math.random()*6) + 1;
    res.render("rolldice.ejs",{ diceNum });
});

app.get("/ig/:username",(req,res)=>{
    // let followers = ["rahul","Divyesh","Nikunj","mehul"];
    let { username } = req.params;
    const Instadata = require('./infoInsta.json');
    const data = Instadata[username];
    // res.render("instagram.ejs",{ username , followers });
    if (data) {
        res.render("instagram.ejs",{ data });
    }else{
        res.render("error.ejs");
    }
});

app.get("/about",(req,res)=>{
    res.send("<code><h1>This is about page</h1></code>  ");
});

app.listen(port,()=>{
    console.log(`listen at port ${port}`);
});