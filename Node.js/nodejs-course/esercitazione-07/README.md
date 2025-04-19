# Esercitazione 07: Creazione di un Server HTTP con Node.js

In questa esercitazione, esploreremo come creare un server HTTP utilizzando Node.js. Impareremo a gestire le richieste e le risposte, a configurare le route e a servire contenuti statici.

## Obiettivi dell'esercitazione

- Comprendere il funzionamento di un server HTTP in Node.js.
- Imparare a gestire le richieste e le risposte.
- Configurare le route per diverse URL.
- Servire file statici come HTML, CSS e JavaScript.

## Indice degli argomenti teorici collegati

1. Introduzione a Node.js
2. Creazione di un server HTTP
3. Gestione delle richieste e delle risposte
4. Routing in Node.js
5. Servire contenuti statici

## Guida dettagliata agli argomenti teorici

### 1. Introduzione a Node.js
Node.js è un ambiente di esecuzione JavaScript che consente di eseguire codice JavaScript sul server. È costruito sul motore V8 di Google Chrome e offre un'architettura non bloccante, ideale per applicazioni scalabili.

### 2. Creazione di un server HTTP
Per creare un server HTTP in Node.js, utilizziamo il modulo `http`. Ecco un esempio di base:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
```

### 3. Gestione delle richieste e delle risposte
Il server può gestire diverse richieste in base al metodo HTTP (GET, POST, ecc.) e all'URL. Possiamo analizzare `req.method` e `req.url` per determinare come rispondere.

### 4. Routing in Node.js
Il routing consente di gestire diverse URL con funzioni specifiche. Possiamo implementare un semplice router controllando l'URL della richiesta.

### 5. Servire contenuti statici
Per servire file statici, possiamo utilizzare il modulo `fs` per leggere i file dal filesystem e inviarli come risposta.

Con questa esercitazione, avrai una comprensione pratica di come costruire un server HTTP con Node.js e gestire le richieste in modo efficace.