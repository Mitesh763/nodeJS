const mongoose = require('mongoose');
const Chat = require('./models/chats.js')


main().then(()=>{
    console.log("connection successfull")
}).catch((err)=>{
    console.log(err)
}) 
 
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}


let allChats = [
    {
        from: "jaypal",
        to: "dhruv",
        msg: "h1",
        created_at : new Date(),
    },
    {
        from: "jaypal",
        to: "manav",
        msg: "h2",
        created_at : new Date(),
    },
    {
        from: "oggy",
        to: "jack",
        msg: "h3",
        created_at : new Date()
    },
    {
        from: "bob",
        to: "olly",
        msg: "h4",
        created_at : new Date()
    },
    {
        from: "jack",
        to: "olly",
        msg: "h5",
        created_at : new Date()
    },
    {
        from: "bob",
        to: "oggy",
        msg: "h6",
        created_at : new Date()
    },
];

Chat.insertMany(allChats);