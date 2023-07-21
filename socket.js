const express = require('express');
const app = express();
const { createServer } = require("http");
const cors = require('cors');
const { Server } = require("socket.io");
app.use(cors());

const server = createServer(app); 

const io = new Server(server, {
    cors: {
        origin: "https://api-blog-v7sl.onrender.com",
        methods: ["GET", "POST", "DELETE", "PATCH"],
      }
});

io.on("connection", (socket) => {
    console.log('client est connecté : ', socket.id);
    
    socket.on("disconnect", ()=>{
        console.log("Client deconnecte : ", socket.id)
    })
});

// const io = new Server(server, {
//     cors: {
//         origin: "https://startup-api-sigma.vercel.app",
//         methods: ["GET", "POST", "DELETE", "PATCH"],
//       }
// });

// io.on("connection", (socket) => {
//     console.log('client est connecté : ', socket.id);
    
//     socket.on("disconnect", ()=>{
//         console.log("Client deconnecte : ", socket.id)
//     })
// });


require('dotenv').config();
const port = process.env.SOCKET_PORT || 3001;

app.get('/', (req, res)=>{
    res.send('bienvenu dans le serveur socket');
})

//accepte la connexion des clients sur le port  3001
server.listen(port, () => {
    console.log('Serveur de socket.io démarré sur le port', port);
});


module.exports = io;
