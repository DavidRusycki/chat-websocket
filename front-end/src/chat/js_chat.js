let websocket = new WebSocket("ws://localhost:8080");

websocket.onopen = (message) => {
    console.log('Conexão aberta.');
    websocket.send("Mensagem De início");
}

let enviaNovaMensagem = function() {
    let input = document.getElementById('mensagemReal');
    let Mensagem = input.value


    let dados = {
        "mensagem" : Mensagem,
        "nome": localStorage.nomeUsuario
    };

    websocket.send(JSON.stringify(dados));
    adicionaMensagemOnTela(JSON.stringify(dados));
    input.innerHTML = '';
    input.value = '';
}

websocket.onmessage = (message) => {
    var reader = new FileReader();
    if (message.data.toString() == '[object Blob]') {
        reader.addEventListener("loadend", function() {
            adicionaMensagemOnTela(reader.result);
        });
        reader.readAsText(message.data);
    }
    else {
        console.log('[Mensagem]');
        console.log(message.data);
    }
}

websocket.onclose = (message) => {
    console.log("[Close]");
    console.log(message);
}

websocket.onerror = (message) => {
    console.log('[Error]');
    console.log(message);
}

let adicionaMensagemOnTela = function(Strigdados) {
    
    let dados = JSON.parse(Strigdados);

    let nomeUsuario = dados.nome;
    let dataMensagem = new Date().toLocaleTimeString()
    let mensagem = dados.mensagem;

    let htmlbase = `
        <span href="#" class="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
            <div class="d-flex w-100 align-items-center justify-content-between">
            <strong class="mb-1">${nomeUsuario}</strong>
            <small>${dataMensagem}</small>
            </div>
            <div class="col-10 mb-1 small">${mensagem}</div>
        </span>
    `;

    let div = document.getElementById('divMensagens');
    div.innerHTML += htmlbase;
}
