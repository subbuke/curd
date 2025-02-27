const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();

app.get("/", (req, res) => {
    res.send("hello world");
})


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("server is running at port " + PORT);
})