const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


//use methods
app.use(cors());
app.use(express.json());

// database connection
 mongoose.connect('mongodb+srv://subramanyamchowdam7654:subbu1919@cluster1.0ybx9.mongodb.net/admin123?retryWrites=true&w=majority&appName=Cluster1')
.then(() => {
    console.log("database connected successfully");
})
.catch(err => console.log(err));

//schema model
const usersSchema = new mongoose.Schema({
    name: String,
    age: String
})

const user = mongoose.model("users", usersSchema);

//get request
app.get('/users', (req, res)=> {
  user.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).send('Error fetching items: ' + err));
})

//post request
app.post('/post', (req, res) => {
    const { name, age } = req.body;
    
    // Create a new user instance
    const newUser = new user({
        name: name,
        age: age
    });

    // Save the new user to the database
    newUser.save()
        .then(() => res.status(201).json({ message: 'User added successfully' }))
        .catch(err => res.status(400).send('Error adding user: ' + err));
})




app.get('/', (req, res) => {
   res.send("server running successfully");
});

app.get('/second', (req, res) => {
      res.send("second also")
})

const PORT = 5001;
app.listen(PORT, ()=> {
    console.log("server running successfully");
})