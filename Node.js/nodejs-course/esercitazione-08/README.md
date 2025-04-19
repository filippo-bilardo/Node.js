# Esercitazione 08: Creazione di un Server HTTP con Node.js

In questa esercitazione, esploreremo come creare un server HTTP utilizzando Node.js. Impareremo a gestire le richieste e le risposte, a servire contenuti statici e a implementare una semplice API.

## Obiettivi

- Comprendere il funzionamento di un server HTTP in Node.js.
- Imparare a gestire le richieste e le risposte.
- Creare un server che risponde a diverse rotte.
- Servire file statici come HTML, CSS e JavaScript.

## Indice degli Argomenti Teorici

1. Introduzione a Node.js
2. Creazione di un server HTTP
3. Gestione delle richieste e delle risposte
4. Routing in Node.js
5. Servire contenuti statici
6. Introduzione a Express (opzionale)

## Guida Dettagliata agli Argomenti Teorici

### 1. Introduzione a Node.js
Node.js è un ambiente di esecuzione JavaScript che consente di eseguire codice JavaScript sul server. È costruito sul motore V8 di Google Chrome e offre un'architettura non bloccante, ideale per applicazioni web scalabili.

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
Il server può gestire diverse richieste in base all'URL e al metodo HTTP. Possiamo utilizzare `req.url` per determinare quale contenuto restituire.

### 4. Routing in Node.js
Il routing consente di gestire diverse rotte nel nostro server. Possiamo implementare un semplice sistema di routing utilizzando condizioni `if` o, per una soluzione più robusta, utilizzare un framework come Express.

### 5. Servire contenuti statici
Per servire file statici, possiamo utilizzare il modulo `fs` per leggere i file dal filesystem e inviarli come risposta.

### 6. Introduzione a Express (opzionale)
Express è un framework minimalista per Node.js che semplifica la creazione di server e la gestione delle rotte. È altamente raccomandato per applicazioni più complesse.

## Conclusione
Al termine di questa esercitazione, avrai acquisito le competenze necessarie per creare un server HTTP di base in Node.js e gestire le richieste degli utenti.