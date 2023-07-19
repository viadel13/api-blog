const express = require('express');
const blogRoute = require('./routes/blog.route');
const mongoose = require('mongoose');
const cors = require('cors');
const {StatusCodes} = require('http-status-codes');


const port = 5000;

mongoose.connect('mongodb://127.0.0.1/blog');

const app = express();
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));



app.use('/', blogRoute);

app.use((req, res)=>{
    res.status(StatusCodes.NOT_FOUND).send('page non trouve');
})

app.listen(port, ()=>{
    console.log('application demarre sur le port', port);
})