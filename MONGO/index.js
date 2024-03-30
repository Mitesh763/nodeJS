const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/test");
/**
 *    mongodb   -- protocol (fix)
 *    127.0.0.1 -- like localhost (fix)
 *    27017     -- port number (fix)
 *    test      -- db (any)
 */

////////////// async fun
main()
  .then((res) => console.log("Connection successfull"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//////////// shape of document within collection
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

///////////   construct documents
const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

////////    add user
const user1 = new User({name:"jaypal", email:"jaypal7@gmail.com",age:"14"});
user1.save();

/////////    another user
const user2 = new User(
    {
        name:"mitesh", 
        email:"mitesh7@gmail.com",
        age:"21"
    }
);
user2
   .save()
   .then((res)=>{
       console.log("Inserted success!");
   })
   .catch((err)=>{
       console.log(err)
   })


/////////////////// insert many
User.insertMany([
  { name: "a", email: "a@gmail.com", age: 1 },
  { name: "b", email: "b@gmail.com", age: 2 },
  { name: "c", email: "c@gmail.com", age: 3 },
  { name: "d", email: "d@gmail.com", age: 4 },
]).then((res) => console.log("Inserted many users!"));

//////////////////  find  --> not return promice but it is thennable 
User.find({})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => { 
    console.log(err);
  });

User.find({age:{$gte: 14}})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => { 
    console.log(err);
});

User.findOne({age:{$gte: 14}})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => { 
    console.log(err);
});

User.findById('660273e6ab0423ba939e8282')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => { 
    console.log(err);
});


//////////// Update
User.updateOne({name:"a"},{age:20}).then((res)=>{
    console.log(res)
}).catch((err)=> {
    console.log(err);
})
User.updateMany({age: {$lte:10}},{age:11}).then((res)=>{
    console.log(res)
}).catch((err)=> {
    console.log(err);
})

///// Delete
User.deleteOne({name:"a"}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
User.deleteMany({name:"d"}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
