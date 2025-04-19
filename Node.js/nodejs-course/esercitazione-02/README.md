# Esercitazione 02: Creazione di un Server HTTP

In questa esercitazione, imparerai a creare un semplice server HTTP utilizzando Node.js. Questo esercizio ti permetterà di comprendere le basi della gestione delle richieste e delle risposte in un'applicazione web.

## Obiettivi dell'esercitazione

- Comprendere come funziona il modulo `http` di Node.js.
- Creare un server che risponde a richieste HTTP.
- Gestire le richieste e inviare risposte personalizzate.

## Indice degli argomenti teorici collegati

1. Introduzione a Node.js
2. Modulo HTTP
3. Creazione di un server HTTP
4. Gestione delle richieste e delle risposte

## Descrizione dettagliata

In questa esercitazione, utilizzerai il modulo `http` di Node.js per creare un server che ascolta le richieste sulla porta 3000. Quando un utente accede al server tramite un browser, il server risponderà con un messaggio di benvenuto.

### Passaggi

1. **Creazione del file server.js**: Inizia creando un file chiamato `server.js` nella cartella di questa esercitazione.
2. **Scrittura del codice**: All'interno di `server.js`, utilizza il modulo `http` per creare un server.
3. **Avvio del server**: Fai in modo che il server ascolti sulla porta 3000 e logga un messaggio nella console quando è in esecuzione.
4. **Test del server**: Apri un browser e vai all'indirizzo `http://localhost:3000` per vedere la risposta del server.

### Codice di esempio

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Benvenuto nel mio server Node.js!\n');
});

server.listen(3000, () => {
    console.log('Server in ascolto sulla porta 3000');
});
```

### Conclusione

Al termine di questa esercitazione, avrai acquisito familiarità con la creazione di un server HTTP in Node.js e la gestione delle richieste e delle risposte. Questo è un passo fondamentale per costruire applicazioni web più complesse.

## Prossimi passi

Dopo aver completato questa esercitazione, puoi passare all'esercitazione successiva, dove esplorerai il routing nelle applicazioni Node.js.