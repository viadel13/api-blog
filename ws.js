const WebSocket = require('ws');

const SOCKET_SERVER_URL = 'wss://api-blog-v7sl.onrender.com:3001'; // Utilisez "wss" pour le protocole sécurisé WebSocket

const socket = new WebSocket(SOCKET_SERVER_URL);

socket.onopen = () => {
  console.log('Connexion établie avec le serveur socket.io');
};

socket.onmessage = (message) => {
  console.log('Message reçu du serveur socket.io:', message.data);
};

socket.onclose = () => {
  console.log('Connexion fermée avec le serveur socket.io');
};

socket.onerror = (error) => {
  console.error('Erreur de connexion avec le serveur socket.io:', error.message);
};
