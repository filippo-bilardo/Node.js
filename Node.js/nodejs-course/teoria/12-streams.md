# Streams in Node.js

## Introduzione

In Node.js, i **streams** sono un modo potente per gestire i dati in modo efficiente. I streams permettono di leggere e scrivere dati in modo continuo, piuttosto che caricare tutto in memoria. Questo è particolarmente utile quando si lavora con file di grandi dimensioni o quando si gestiscono dati in tempo reale.

## Tipi di Streams

Node.js supporta diversi tipi di streams:

1. **Readable Streams**: Streams da cui è possibile leggere i dati. Esempi includono `fs.createReadStream()` per leggere file.
2. **Writable Streams**: Streams su cui è possibile scrivere i dati. Esempi includono `fs.createWriteStream()` per scrivere file.
3. **Duplex Streams**: Streams che possono sia leggere che scrivere dati. Un esempio è il `net.Socket`.
4. **Transform Streams**: Streams che possono modificare i dati mentre vengono letti o scritti. Un esempio è `zlib.createGzip()` per la compressione.

## Vantaggi dei Streams

- **Efficienza della memoria**: I streams permettono di gestire i dati in modo incrementale, riducendo l'uso della memoria.
- **Elaborazione in tempo reale**: I dati possono essere elaborati man mano che vengono ricevuti, rendendo i streams ideali per applicazioni in tempo reale.
- **Facilità di utilizzo**: Node.js fornisce un'API semplice e intuitiva per lavorare con i streams.

## Esempio di utilizzo

Ecco un esempio di come utilizzare un Readable Stream per leggere un file e un Writable Stream per scrivere i dati in un altro file:

```javascript
const fs = require('fs');

// Creare un Readable Stream
const readableStream = fs.createReadStream('input.txt');

// Creare un Writable Stream
const writableStream = fs.createWriteStream('output.txt');

// Leggere i dati dal Readable Stream e scriverli nel Writable Stream
readableStream.pipe(writableStream);
```

## Conclusione

I streams sono una parte fondamentale di Node.js e offrono un modo efficiente per gestire i dati. Comprendere come funzionano i streams e come utilizzarli può migliorare notevolmente le prestazioni delle applicazioni Node.js.