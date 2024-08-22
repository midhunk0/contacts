// @ts-nocheck
const express=require("express");  //for building the REST api
const mongoose=require("mongoose");  //for interacting with mongodb
const cors=require("cors");  //to enable cross origin resource sharing
const dotenv=require("dotenv").config();  //for managing environment variables

const app=express();
const port=8000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//basic route
app.get("/", (req, res)=>{
    res.send("hello, world");
});

//mongodb connection
mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("MongoDB connected"))
    .catch((err)=>console.log(err));

//routes
app.use("/", require("./route"));

//start server
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});