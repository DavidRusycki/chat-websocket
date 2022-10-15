# chat-websocket

> Chat com WebSocket - Testando a tecnologia

## Descrição

Uma Aplicação simples para testar a tecnologia WebSocket. O projeto consiste em um Front-end que irá receber e gerar os itens de mensagem na tela para o usuário e o Back-end para realizar a distribuição das mensagens para os clientes conectados no websocket, o back-end não armazena as mensagens.

### Estrutura da aplicação

- A aplicação roda em container's Docker, isso facilita colocar a mesma em execução.
- O primeiro container é responsável por rodar o NodeJs com a extensão [ws](https://www.npmjs.com/package/ws) que permite criar um servidor WebSocket e distribuir as mensagens para os clientes conectados.
- O segundo container é responsável por rodar o PHP com Apache, isso apenas para dispobilizar os arquivos JS e HTML. (PHP não foi usado, seria interessante alterar para uma estrutura com NodeJs por exemplo.)

### Fluxo da aplicação

1. Necessário acessar o endereço do Front-end da aplicação ex: ```http://localhost/login```.
2. Informar o nome que você deseja ser identificado.
3. Realizar o envio de alguma mensagem. (Necessário que a outra pessoa esteja conectada).
4. Verificar o funcionamento da aplicação

## Setup 

1. Realizar o Clone do repositório.
```bash
$ git clone https://github.com/DavidRusycki/chat-websocket.git
```

2. Alterar o endereço para o IP do container que irá rodá-la.
> Verificar os arquivos "front-end/src/chat/js_chat.js" e "front-end/src/chat/index.html"

3. Iniciar o container Back-End.
```bash
$ cd /back-end
$ docker compose up -d
```

4. Iniciar o container Front-End.
```bash
$ cd /front-end
$ docker compose up -d
```

## Melhorias

1. Modificar o front-end para usar NodeJs.
2. Implementar salas restritas de conversa (Apenas 2 pessoas).
3. Implementar recursos, como mensagem já visualizada.
4. Implementar uma estrutura para salvar as mensagens (ClientSide).
5. Implementar recursos de usabilidade.
6. Implementar variáveis de ambientes para configurar o endereço ip.


![Diagrama](diagram.drawio)

[Diagrama](diagram.drawio)
