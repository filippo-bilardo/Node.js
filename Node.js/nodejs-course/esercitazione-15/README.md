# Esercitazione 15: Utilizzo di Express per Creare un'API RESTful

In questa esercitazione, esploreremo come utilizzare il framework Express per creare un'API RESTful. Impareremo a gestire le richieste HTTP, a definire le rotte e a restituire risposte in formato JSON. Questa esercitazione è fondamentale per comprendere come costruire applicazioni web moderne utilizzando Node.js.

## Obiettivi dell'Esercitazione
- Comprendere il concetto di API RESTful.
- Imparare a configurare un server Express.
- Creare rotte per gestire le richieste GET, POST, PUT e DELETE.
- Restituire dati in formato JSON.

## Indice degli Argomenti Teorici Collegati
1. Introduzione a Node.js (teoria/01-introduzione-nodejs.md)
2. Express Framework (teoria/16-express.md)
3. Routing in Express (teoria/07-routing.md)
4. Middleware in Express (teoria/17-middleware.md)
5. Testing delle API (teoria/10-testing.md)

## Guida Dettagliata
In questa sezione, forniremo una guida passo-passo su come completare l'esercitazione, inclusi i codici di esempio e le spiegazioni dettagliate per ogni parte del processo. 

### Passo 1: Installazione di Express
Iniziamo installando il framework Express nel nostro progetto. Esegui il seguente comando nel terminale:

```
npm install express
```

### Passo 2: Creazione di un Server di Base
Crea un file chiamato `server.js` e aggiungi il seguente codice per configurare un server di base:

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server in ascolto su http://localhost:${PORT}`);
});
```

### Passo 3: Definizione delle Rotte
Aggiungi le rotte per gestire le richieste. Ecco un esempio di come definire una rotta GET:

```javascript
app.get('/api/items', (req, res) => {
    res.json([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);
});
```

### Passo 4: Gestione delle Richieste POST
Aggiungi una rotta per gestire le richieste POST:

```javascript
app.post('/api/items', (req, res) => {
    const newItem = req.body;
    // Logica per aggiungere l'elemento
    res.status(201).json(newItem);
});
```

### Passo 5: Testing dell'API
Utilizza strumenti come Postman o curl per testare le tue rotte e assicurarti che tutto funzioni correttamente.

### Conclusione
Al termine di questa esercitazione, avrai creato un'API RESTful di base utilizzando Express. Questo è un passo fondamentale per costruire applicazioni web più complesse e interattive.

Assicurati di consultare gli argomenti teorici collegati per approfondire ulteriormente le tue conoscenze su Node.js e Express.