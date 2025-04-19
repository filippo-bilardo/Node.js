# HTTP Server in Node.js

## Introduzione

In questo documento, esploreremo come creare un server HTTP utilizzando Node.js. Node.js fornisce un modulo integrato chiamato `http` che consente di creare server web in modo semplice e veloce. Impareremo a gestire le richieste e le risposte HTTP, a configurare le intestazioni e a inviare contenuti al client.

## Creazione di un Server HTTP

### Passo 1: Importare il Modulo HTTP

Per iniziare, dobbiamo importare il modulo `http` di Node.js. Questo modulo ci fornisce le funzionalità necessarie per creare un server.

```javascript
const http = require('http');
```

### Passo 2: Creare un Server

Utilizziamo il metodo `createServer` del modulo `http` per creare un server. Questo metodo accetta una funzione di callback che verrà eseguita ogni volta che il server riceve una richiesta.

```javascript
const server = http.createServer((req, res) => {
    res.statusCode = 200; // Imposta il codice di stato della risposta
    res.setHeader('Content-Type', 'text/plain'); // Imposta il tipo di contenuto
    res.end('Hello World\n'); // Invia la risposta al client
});
```

### Passo 3: Ascoltare le Richieste

Dopo aver creato il server, dobbiamo farlo ascoltare su una porta specifica. Utilizziamo il metodo `listen` per farlo.

```javascript
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server in ascolto su http://localhost:${PORT}/`);
});
```

## Esempio Completo

Ecco un esempio completo di un semplice server HTTP:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server in ascolto su http://localhost:${PORT}/`);
});
```

## Gestione delle Richieste

Possiamo anche gestire diverse richieste in base all'URL. Ad esempio, possiamo inviare risposte diverse per richieste diverse:

```javascript
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Benvenuto nella home page!\n');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Questa è la pagina About.\n');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Pagina non trovata.\n');
    }
});
```

## Conclusione

In questo documento, abbiamo visto come creare un server HTTP di base utilizzando Node.js. Abbiamo imparato a gestire le richieste e le risposte e a inviare contenuti al client. Questo è solo l'inizio; ci sono molte altre funzionalità che possiamo esplorare, come la gestione delle rotte, l'integrazione con i database e l'uso di framework come Express.

## Argomenti Teorici Correlati

- Modulo HTTP
- Gestione delle richieste e delle risposte
- Routing in Node.js
- Utilizzo di Express per server più complessi