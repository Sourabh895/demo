const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

//Routes
const songRoutes = require('./routes/route');
const seedDB = require('./seed');



app.get('/', (req, res) => {
      res.send("Hello World")
})


//DataBase
mongoose.connect('mongodb://localhost:27017/themeSong', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("DB Connected")
})
.catch((err) => {
    console.log(err)
})



// middleware
app.use(express.json())

//seedDB();

app.use(songRoutes);






app.listen(8080, () => {
    console.log("Server running on port 8080")
})