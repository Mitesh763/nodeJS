// const fruit = require('./Fruits');

// console.log(fruit);
// console.log(process.argv)


//global install use------>   '-g'
const figlet = require('figlet');

figlet("JAY  SHREE  RAM",(err,data)=>{
    if (err) {
        console.log(err);
    }
    console.log(data);
}); 