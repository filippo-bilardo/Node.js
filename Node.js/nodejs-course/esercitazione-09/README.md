# Esercitazione 09: Creazione di un Server HTTP con Node.js

In questa esercitazione, esploreremo come creare un server HTTP utilizzando Node.js. Impareremo a gestire le richieste e le risposte, a servire contenuti statici e a implementare una semplice API.

## Obiettivi dell'esercitazione
- Comprendere il funzionamento di un server HTTP in Node.js.
- Imparare a gestire le richieste e le risposte.
- Creare un server che risponde a diverse rotte.

## Indice degli argomenti teorici collegati
1. Introduzione a Node.js
2. Creazione di un server HTTP
3. Gestione delle richieste e delle risposte
4. Routing in Node.js
5. Debugging di un server Node.js

## Descrizione dettagliata
In questa esercitazione, utilizzeremo il modulo `http` di Node.js per creare un server semplice. Il server risponderà a richieste GET e POST e servirà contenuti statici come file HTML, CSS e JavaScript. Inoltre, implementeremo una semplice API che restituirà dati in formato JSON.

### Passaggi
1. Creare un nuovo file chiamato `server.js`.
2. Importare il modulo `http`.
3. Creare un server utilizzando `http.createServer()`.
4. Gestire le richieste e le risposte nel server.
5. Testare il server utilizzando un browser o strumenti come Postman.

### Esempio di codice
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World!</h1>');
    res.end();
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

### Conclusione
Al termine di questa esercitazione, avrai acquisito le competenze necessarie per creare un server HTTP di base in Node.js e gestire le richieste e le risposte. Questo è un passo fondamentale per costruire applicazioni web più complesse.

## Risorse aggiuntive
- Documentazione ufficiale di Node.js
- Tutorial su HTTP e Node.js
- Esempi di progetti reali che utilizzano server Node.js