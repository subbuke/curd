const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get('/', (req, res) =>{
    res.send("server running successfully");
})

const port = 3001;

app.listen(port, () => {
    console.log("server running successfully");
})