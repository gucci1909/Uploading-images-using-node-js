const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const mongoose = require("mongoose");
const songRoutes = require("./Routes/Songs/song.route")

app.use(cors());
app.use(express.json());

app.use("/songs",songRoutes);

app.get("/",(req,res)=>{
    res.send("Hello World!");
})

app.listen(PORT , ()=>{
    console.log(`http://localhost:${PORT}`);
})