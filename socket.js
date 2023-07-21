require('dotenv').config();
const port = process.env.PORT || 3001;

// const io = require('socket.io')(port,{

//     cors: {
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST"],
//     },

// }) 

const io = require('socket.io')(port,{

    cors: {
        origin: "https://startup-api-sigma.vercel.app",
        methods: ["GET", "POST"],
    },

}) 


io.on('connection', (socket) => {
    console.log('Un client est connecté');
    // Écoutez les événements socket ici si nécessaire
});

module.exports = io;