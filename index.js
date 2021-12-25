const ws = require('ws')
const server = new ws.Server({port:8080});

server.on('connection', ws => {
    ws.on('message', message => {
        console.log(message.toString());

        server.clients.forEach(client => {
            client.send(message.toString());
        });
    });

    ws.on('close', () => {
        console.log('close');
    });
});
