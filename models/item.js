const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  category:{type: String, required: true},
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  price: {type: Number, required: true},
  photoURL:{type: String, required: true},
  phone:{type: String, required: true},
  email:{type:String,required: true},
  rentedBy:{type: String,default:null}
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
