const figlet = require('figlet');

figlet("JAY  SHREE  RAM",(err,data)=>{
    if (err) {
        console.log(err);
    }
    console.log(data);
});