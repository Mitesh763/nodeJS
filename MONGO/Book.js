const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

// check validation only insertion time not in updation time
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // must be require
  },
  author: {
    type: String,
  },
  price: {
    type: String,
    min: [1, "Price is too small for amzon selling"], // price must be greater than equal to 1 and custom err msg
  },
  discount: {
    type: Number,
    default: 0, // by default discount
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"], // book must out of two category otherwice thorw err
  },
});

const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title: "AWP",
//     author: "AC",
//     price: -23,
//     category: "fiction"
// })
// book1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

Book.findByIdAndUpdate(
  "6602a52f2156767ad52a8026",
  { price: 5000},
  { runValidators: true } // also validation while updation process
)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message);
  });
