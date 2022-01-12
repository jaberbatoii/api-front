const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema([
  {
           _id:{type:Number}, 
            title: { type: String, required: true, unique: true },
            description: { type: String, required: true, },
            img: { type: String, required: true },
            categories: { type: Array },
            category:{type:String},
            price: { type: Number, required: true },   
  }
],
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
