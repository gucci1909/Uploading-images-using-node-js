const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Hello World!");
})

app.listen(PORT , ()=>{
    console.log(`http://localhost:${PORT}`);
})