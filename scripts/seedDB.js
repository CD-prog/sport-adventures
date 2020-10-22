const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sportadventures");


const ItemSeed = [
  {
    category: "Skis",
    title: "Atomic Skis ",
    description: "New Atomic Skis ",
    location: "Denver",
    price: "20",
    photos: "",
    phone: "312 000 0000",
    email:""
  },
  {
    category: "Skis",
    title: "Nordica ",
    description: "mint condition Nordica Skis ",
    location: "Denver",
    price: "20",
    photos: "",
    phone: "312 000 0000",
    email:""
  },
  {
    category: "Snowboards",
    title: "Burton snowboard",
    description: "used item good condition",
    location: "Denver ",
    price: "50",
    photos: "",
    phone: "312 000 0001",
    email:""

  },
  {
    category: "Bicycles",
    title: "Trek bicycle",
    description: "used Trek bike ",
    location: "Chicago",
    price: "130",
    photos: "",
    phone: "312 100 0000",
    email:""

  },
  {
    category: "Bicycles",
    title: "Specialized bicycle",
    description: "used Specialized bike ",
    location: "Chicago",
    price: "150",
    photos: "",
    phone: "312 100 0000",
    email:""

  },
  {
    category: "Bicycles",
    title: "Cannondale bicycle",
    description: "used Cannondale bike ",
    location: "Chicago",
    price: "180",
    photos: "",
    phone: "312 100 0003",
    email:""
  },
  {
    category: "Surfboards",
    title: "Just a surfboard",
    description: "used ",
    location: "Chicago",
    price: "15",
    photos: "",
    phone: "312 100 0033",
    email:""
  },
];


db.Item.remove({})
  .then(() => db.Item.collection.insertMany(ItemSeed))
  .then(data => {
    console.log(data.result.n + "records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });