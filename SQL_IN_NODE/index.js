const { faker } = require("@faker-js/faker");
const mysql = require("mysql2"); // sql mdule
const express = require("express");
const app = express();
const path  = require('path');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

// connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Mitesh@#963",
});

let getUser = () => {
  return [
    faker.datatype.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// let data = [];
// for (let i = 1; i <= 100; i++) {
//     data.push(getUser());    // 100 user fake data
// }


// Home route
app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM users_1`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let countUser = result[0]["count(*)"];
    res.render("home.ejs",{countUser});
    //   res.send(result[0]["count(*)"]);
    });
  } catch (err) {
    console.log(err);
  }
});


// Show route
app.get("/users",(req,res)=>{
    let q = `SELECT * FROM users_1`;
    try {
        connection.query(q, (err, users) => {
          if (err) throw err;
          res.render("users.ejs",{ users });
        });
      } catch (err) {
        console.log(err);
      }
})

// EDIT route
app.get("/users/:id/edit",(req,res)=>{
    let { id } = req.params;
    let q = `SELECT * FROM users_1 WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
          if (err) throw err;
          let user = result[0];
          res.render("edit.ejs",{user});
        });
      } catch (err) {
        console.log(err);
    }
})

// Update Route
app.patch("/user/:id",(req,res)=>{
    // let UpdateUsername = req.body;
    // console.log(UpdateUsername);
    res.send("update")
})


app.listen("8080", () => {
  console.log("PORT Listining at 8080");
});

// let q = "INSERT INTO users_1 (id, username,email,password) VALUES ?";  // ? is splaceholder
// let userData = [
//     ["123b","123_new1b","abc@gmail.comb","12@3b"],
//     ["123c","123_new1c","abc@gmail.comc","12@3c"]
// ];

// connection.query(q,[data],(err,results)=>{
//     if (err) throw err;
//     console.log(results);
//     console.log(results[0]);
//     console.log(results[1]);
// })

// connection.end();
