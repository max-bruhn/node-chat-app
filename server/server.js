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

    socket.broadcast.emit('newMessage', {
        from: 'admin',
        text: 'new user joined',
        createdAt: new Date().getTime()
    })

    socket.on('disconnect', () => {
        console.log('disconnected from client');
    });

    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the Chat',
        createdAt: new Date().getTime()
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
        // socket.broadcast.emit('newMessage', )
    });
});



app.get('/', (req, res) => {
    res.render('index.html');
});

server.listen(port, () =>{
    console.log('startet on port ' + port);
} );