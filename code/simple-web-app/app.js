const express = require('express');
const app = express();
const port = 3000;

// Risponde a una richiesta GET con un messaggio di benvenuto
app.get('/', (req, res) => {
  res.send('Benvenuto nell\'app web più semplice!');
});

// Aggiunge un endpoint GET per l'indirizzo "/ciao"
app.get('/ciao', (req, res) => {
    res.send('Ciao! Questo è un saluto dall\'indirizzo "/ciao"');
  });
  

// Avvio del server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
