# File: /nodejs-course/nodejs-course/teoria/03-file-system.md

# File System in Node.js

## Introduzione
Il modulo `fs` (file system) di Node.js fornisce un'API per interagire con il file system del computer. Questo modulo consente di leggere, scrivere, aggiornare e cancellare file e directory in modo sincrono e asincrono.

## Funzionalità principali
- **Lettura di file**: Permette di leggere il contenuto di file in vari formati.
- **Scrittura di file**: Consente di creare nuovi file o sovrascrivere file esistenti.
- **Aggiornamento di file**: Permette di aggiungere contenuto a file esistenti.
- **Cancellazione di file**: Consente di eliminare file dal file system.
- **Gestione di directory**: Permette di creare, rinominare e cancellare directory.

## Metodi principali
- `fs.readFile()`: Legge il contenuto di un file.
- `fs.writeFile()`: Scrive dati in un file.
- `fs.appendFile()`: Aggiunge dati a un file esistente.
- `fs.unlink()`: Rimuove un file.
- `fs.mkdir()`: Crea una nuova directory.
- `fs.readdir()`: Legge il contenuto di una directory.

## Esempi di utilizzo
### Lettura di un file
```javascript
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
```

### Scrittura in un file
```javascript
const fs = require('fs');

fs.writeFile('example.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File scritto con successo!');
});
```

## Argomenti teorici collegati
- Introduzione a Node.js
- Moduli in Node.js
- Gestione degli errori in Node.js
- Programmazione asincrona in Node.js

## Conclusione
Il modulo `fs` è uno strumento potente per la gestione dei file in Node.js. Comprendere come utilizzare questo modulo è fondamentale per sviluppare applicazioni che richiedono interazioni con il file system.