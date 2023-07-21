const express = require('express');
const app = express();
const { createServer } = require("http");
const cors = require('cors');
const { Server } = require("socket.io");
app.use(cors());

const server = createServer(app); 

// const io = new Server(server, {
//     cors: {
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST", "DELETE", "PATCH"],
//       }
// });

// io.on("connection", (socket) => {
//     console.log('client est connecté : ', socket.id);
    
//     socket.on("disconnect", ()=>{
//         console.log("Client deconnecte : ", socket.id)
//     })
// });

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "DELETE", "PATCH"],
      }
});

io.on("connection", (socket) => {
    console.log('client est connecté : ', socket.id);
    
    socket.on("disconnect", ()=>{
        console.log("Client deconnecte : ", socket.id)
    })
});


require('dotenv').config();


//accepte la connexion des clients sur le port  30001
server.listen(3000, () => {
    console.log('Serveur de socket.io démarré sur le port 3000');
});


module.exports = io;
