const express=require('express');
const app=express();
const PORT=process.env.PORT || 3000;

require("dotenv").config();

app.use(express.json());


const blog=require('./routes/blog');
app.use("/api/v1",blog);

const connectDB=require('./config/database');
connectDB();

app.get("/",(req,res)=>{
    res.send(`<h1>This is homepage baby</h1>`);
})

app.listen(PORT,(req,res)=>{
    console.log("Server is running at 3000:");
})

