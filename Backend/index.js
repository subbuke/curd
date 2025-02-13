const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send("server running successfully");
});

app.get('/second', (req, res) => {
      res.send("second also")
})
const PORT = 5000;
app.listen(PORT, ()=> {
    console.log("server running successfully");
})