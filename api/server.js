const express= require('express');
const cors= require('cors');
const mongoose=require('mongoose')
require('dotenv').config();

const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

const app=express();
const port=process.env.PORT || 5000;
dotenv.config();

const uri=process.env.ATLAS_URL;
mongoose.connect(uri,
    {
        // useNewUrlParser:true,
        // useCreateIndex:true,
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
const connection=mongoose.connection
connection.once('open',()=>{
    console.log("MongoDB DATABASE  connection True");
})


app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);


app.listen(port, ()=> {
    console.log(`Server is run on Port ${port}`);
})