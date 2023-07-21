const express = require('express');
const blogRoute = require('./routes/blog.route');
const mongoose = require('mongoose');
const cors = require('cors');
const {StatusCodes} = require('http-status-codes');
const app = express();



app.use(cors({
    origin: 'https://startup-api-sigma.vercel.app',
    methods: ['GET', 'POST'],
  }));
  
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));



require('dotenv').config();
const port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI);



app.use('/', blogRoute);

app.use((req, res)=>{
    res.status(StatusCodes.NOT_FOUND).send('page non trouve');
})

app.listen(port, ()=>{
    console.log('application demarre sur le port', port);
})




