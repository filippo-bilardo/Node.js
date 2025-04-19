# Esercitazione 03: Creazione di un Server HTTP

In questa esercitazione, esploreremo come creare un semplice server HTTP utilizzando Node.js. Impareremo a gestire le richieste e le risposte, e a servire contenuti statici.

## Obiettivi

- Comprendere il funzionamento di un server HTTP in Node.js.
- Imparare a gestire le richieste e le risposte.
- Servire contenuti statici come file HTML, CSS e JavaScript.

## Indice degli Argomenti Teorici

1. Introduzione a Node.js
2. Creazione di un Server HTTP
3. Gestione delle Richieste e Risposte
4. Servire Contenuti Statici
5. Debugging di un Server HTTP

## Descrizione Dettagliata

In questa esercitazione, inizieremo creando un file `server.js` che utilizza il modulo `http` di Node.js per avviare un server. Il server risponderà a tutte le richieste con un messaggio di benvenuto e servirà un file HTML statico.

### Passaggi

1. **Creare il file `server.js`:** Iniziamo creando un file chiamato `server.js` nella cartella di questa esercitazione.
2. **Importare il modulo `http`:** Utilizzeremo il modulo `http` per creare il server.
3. **Gestire le richieste:** Configureremo il server per rispondere a richieste GET con un messaggio di benvenuto.
4. **Servire contenuti statici:** Aggiungeremo la logica per servire un file HTML statico.

### Esempio di Codice

```javascript
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading index.html');
            } else {
                res.end(content);
            }
        });
    } else {
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
```

### File HTML Statici

Creeremo anche un file `index.html` da servire. Questo file conterrà un semplice messaggio di benvenuto.

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Benvenuto</title>
</head>
<body>
    <h1>Benvenuto nel nostro server HTTP!</h1>
    <p>Questo è un esempio di server creato con Node.js.</p>
</body>
</html>
```

## Conclusione

Al termine di questa esercitazione, avrai creato un server HTTP funzionante in Node.js e avrai appreso le basi della gestione delle richieste e delle risposte. Questo è un passo fondamentale per costruire applicazioni web più complesse in Node.js.