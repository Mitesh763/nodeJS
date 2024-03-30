const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const methodoverride = require('method-override')
const {v4:uuidv4 } =require('uuid')
uuidv4();

app.use(express.urlencoded({extended:true}))  // to receive all type of data
app.use(methodoverride('_method'));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

var posts =[

    {
        id : uuidv4(),
        username : "mitesh",
        content : "I love developing......."
    },
    {
        id: uuidv4(),
        username : "jaypal",
        content : "i always excited for inovative activities"
    },
    {
        id: uuidv4(),
        username : "deven",
        content : "i antereted in market"
    }
]

app.get("/",(req,res)=>{
    res.send("Server Working Well...!");
})


app.get("/posts",(req,res)=>{
    // res.send("post Working Well...!");
    res.render("index.ejs",{posts});
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs",{posts});
})

app.post("/posts",(req,res)=>{
    let {username, content } = req.body;
    let id =  uuidv4();
    posts.push({id, username, content})
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    console.log(id);
    post = posts.find((p)=> id === p.id);
    res.render("show.ejs",{post})
})

app.patch("/posts/:id/",(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id === p.id)
    post.content = newContent;
    res.redirect("/posts")
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs",{post})
})

app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id !== p.id);
    res.redirect("/posts")
})

app.listen(port,()=>{
    console.log(`server started at ${port}`);
})