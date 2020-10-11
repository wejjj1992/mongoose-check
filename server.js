const express=require('express')

const connectDB=require("./config/connectDB")
const app=express();


//middleware
app.use(express.json())
//connect database
connectDB()
app.use("/persons",require('./routes/person'));
//run server
const port=process.env.PORT||5000;
app.listen(port,err=>
    err?console.log("error"):console.log("server is running"));