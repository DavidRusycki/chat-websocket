import WebSocket, { WebSocketServer } from 'ws';
const websocket = new WebSocketServer({port:8080});

websocket.on('connection', function(ws) {
    ws.on('message', function(data){
        enviaMensagemOutrosClientes(data, ws);
    });
    enviaMensagemSucessoConexao(ws);
})

let enviaMensagemOutrosClientes = function(data, ws) {
    websocket.clients.forEach(function enviaOutrosClientes(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
    });
}

let enviaMensagemSucessoConexao = function(ws) {
    websocket.clients.forEach(function envia(client) {
        if (client == ws && client.readyState === WebSocket.OPEN) {
          client.send('Conexão realizada com sucesso!');
        }
    });
}

