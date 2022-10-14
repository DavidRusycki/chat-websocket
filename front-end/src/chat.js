let websocket = new Websocket("wss://localhost:9191");

websocket.onopen = (message) => {
    console.log('Conexão aberta.');
    websocket.send("Meu nome é david");
}

websocket.onmessage = (message) => {
    console.log(`[Mensagem] ${message.mensagem}`);
}

websocket.onclose = (message) => {
    console.log("Conexão fechada");
}

websocket.onerror = (message) => {

}
