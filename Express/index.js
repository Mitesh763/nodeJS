const express =require('express');
const app = express();

const port = 3000;

app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
});

// app.use((req,res)=>{
//     console.log("request received!");
//     let head = "<h1>IT</h1>";
//     res.send(head);
// });

app.get("/",(req,res)=>{
    res.send("in home page");
})

// app.get("/orange",(req,res)=>{
//     res.send("in orange page");
// })

// app.get("/apple",(req,res)=>{
//     res.send("in apple page");
    // })

// app.get("/mango",(req,res)=>{
//     res.send("in mango page");
// })

// app.get("*",(req,res)=>{
//     res.send("Does not exit!");
// })

// app.post("/",(req,res)=>{
//     res.send("in home page with post request");
// })



//variable
app.get("/:username/:id", (req,res)=>{
    let {username, id } =  req.params;
    console.log(req.params);
    let header = `welcome  @${username} to page your id is ${id}`;
    res.send(header);
})

// query string
app.get("/search",(req,res)=>{
    console.log(req.query);
    let {q} = req.query;
    if (!q) {
        res.send('<h1>nothing search</h1>')
    }
    res.send(`these are the search For ${q}`)
})