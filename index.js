const express = require('express');
const blogRoute = require('./routes/blog.route');
const mongoose = require('mongoose');
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require('cors');
const {StatusCodes} = require('http-status-codes');
const app = express();



app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: "*",
})

io.on('connection', (socket) => {
    // console.log('Un client est connecté');
    /* Ajoutez ici votre logique pour gérer les connexions de socket.io */

});

require('dotenv').config();
const port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URL);

app.use((req, res, next)=>{
    res.io = io;
    next();
})

app.use('/', blogRoute);

app.use((req, res)=>{
    res.status(StatusCodes.NOT_FOUND).send('page non trouve');
})


httpServer.listen(port, ()=>{
    console.log('application demarre sur le port', port);
})







