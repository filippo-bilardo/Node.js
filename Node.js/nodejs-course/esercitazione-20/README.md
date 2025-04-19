# Esercitazione 20: Implementazione di un Server WebSocket

In questa esercitazione, esploreremo come implementare un server WebSocket utilizzando Node.js. I WebSocket sono una tecnologia che consente la comunicazione bidirezionale tra client e server, rendendo possibile l'invio di dati in tempo reale.

## Obiettivi dell'Esercitazione

1. Comprendere il funzionamento dei WebSocket.
2. Creare un server WebSocket utilizzando la libreria `ws`.
3. Gestire le connessioni dei client e inviare messaggi in tempo reale.
4. Implementare la gestione degli eventi per le connessioni e le disconnessioni dei client.

## Indice degli Argomenti Teorici Collegati

- Teoria 19: WebSocket
- Teoria 06: HTTP Server
- Teoria 11: Async/Await

## Guida Dettagliata

### 1. Introduzione ai WebSocket

I WebSocket sono un protocollo di comunicazione che consente una connessione persistente tra client e server. A differenza delle tradizionali richieste HTTP, i WebSocket permettono di inviare e ricevere dati in tempo reale, rendendoli ideali per applicazioni come chat, giochi online e notifiche in tempo reale.

### 2. Creazione del Server WebSocket

Per iniziare, dobbiamo installare la libreria `ws`. Puoi farlo eseguendo il seguente comando:

```
npm install ws
```

Dopo aver installato la libreria, possiamo creare un semplice server WebSocket:

```javascript
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('Nuovo client connesso');

    socket.on('message', (message) => {
        console.log(`Messaggio ricevuto: ${message}`);
        // Invia un messaggio di risposta al client
        socket.send(`Hai inviato: ${message}`);
    });

    socket.on('close', () => {
        console.log('Client disconnesso');
    });
});

console.log('Server WebSocket in ascolto sulla porta 8080');
```

### 3. Gestione delle Connessioni

Nel codice sopra, abbiamo gestito le connessioni dei client utilizzando l'evento `connection`. Ogni volta che un client si connette, viene creato un nuovo socket per gestire la comunicazione.

### 4. Invio e Ricezione di Messaggi

Utilizziamo l'evento `message` per ricevere messaggi dal client e l'oggetto `socket` per inviare risposte. Questo ci permette di implementare una comunicazione bidirezionale.

### 5. Chiusura della Connessione

Infine, gestiamo l'evento `close` per eseguire operazioni quando un client si disconnette.

## Conclusione

In questa esercitazione, abbiamo implementato un server WebSocket di base utilizzando Node.js. Abbiamo esplorato come gestire le connessioni dei client e inviare messaggi in tempo reale. Questa è una base solida per costruire applicazioni più complesse che richiedono comunicazione in tempo reale.