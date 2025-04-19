# WebSocket in Node.js

## Introduzione

WebSocket è un protocollo di comunicazione che consente una connessione persistente tra client e server, permettendo lo scambio di dati in tempo reale. A differenza delle tradizionali richieste HTTP, WebSocket consente una comunicazione bidirezionale, riducendo la latenza e migliorando l'efficienza nelle applicazioni che richiedono aggiornamenti frequenti, come chat, giochi online e applicazioni di monitoraggio in tempo reale.

## Caratteristiche principali

1. **Connessione persistente**: Una volta stabilita, la connessione WebSocket rimane aperta, consentendo lo scambio di messaggi senza la necessità di riaprire la connessione.
2. **Basso overhead**: WebSocket riduce il numero di byte inviati rispetto alle richieste HTTP tradizionali, migliorando le prestazioni.
3. **Comunicazione bidirezionale**: Sia il client che il server possono inviare messaggi in qualsiasi momento, rendendo la comunicazione più interattiva.

## Implementazione di WebSocket in Node.js

### 1. Installazione delle dipendenze

Per utilizzare WebSocket in un'applicazione Node.js, è possibile utilizzare la libreria `ws`. Per installarla, eseguire il seguente comando:

```
npm install ws
```

### 2. Creazione di un server WebSocket

Ecco un esempio di come creare un semplice server WebSocket:

```javascript
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('message', (message) => {
        console.log(`Received: ${message}`);
        socket.send(`Echo: ${message}`);
    });

    socket.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
```

### 3. Creazione di un client WebSocket

Un client WebSocket può essere creato utilizzando il seguente codice:

```javascript
const WebSocket = require('ws');

const socket = new WebSocket('ws://localhost:8080');

socket.on('open', () => {
    console.log('Connected to server');
    socket.send('Hello Server!');
});

socket.on('message', (message) => {
    console.log(`Received from server: ${message}`);
});

socket.on('close', () => {
    console.log('Disconnected from server');
});
```

## Argomenti teorici correlati

- Introduzione a Node.js
- Moduli in Node.js
- HTTP Server in Node.js
- Event Loop in Node.js
- Comunicazione in tempo reale con WebSocket

## Conclusione

WebSocket è uno strumento potente per costruire applicazioni interattive e in tempo reale. La sua implementazione in Node.js è semplice e consente di sfruttare appieno le capacità del linguaggio per gestire connessioni persistenti e comunicazioni bidirezionali.