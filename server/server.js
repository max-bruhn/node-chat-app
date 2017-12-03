const path = require('path');

const http = require('http');
const express = require('express');
const socketIO = require('socket.io');1

const publicPath = path.join(__dirname, '../public');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newMessage', {
        from: 'Mike',
        text: 'how are you?',
        createAt: 79
    });

    socket.on('disconnect', () => {
        console.log('disconnected from client');
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    });
});



app.get('/', (req, res) => {
    res.render('index.html');
});

server.listen(port, () =>{
    console.log('startet on port ' + port);
} );