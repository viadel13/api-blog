// const io = require('socket.io')(3001,{

//     cors: {
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST"],
//     },

// }) 

const io = require('socket.io')(3001,{

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