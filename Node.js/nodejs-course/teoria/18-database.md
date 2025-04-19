# Database Integration with Node.js

## Introduzione

In questa sezione, esploreremo come integrare un database nelle applicazioni Node.js. La gestione dei dati è una parte fondamentale dello sviluppo di applicazioni, e Node.js offre diverse opzioni per interagire con vari tipi di database, sia relazionali che non relazionali.

## Tipi di Database

1. **Database Relazionali**: Utilizzano tabelle per memorizzare i dati e sono basati su SQL. Esempi comuni includono MySQL, PostgreSQL e SQLite.
2. **Database Non Relazionali**: Utilizzano strutture di dati diverse, come documenti o chiave-valore. MongoDB è uno dei database non relazionali più popolari.

## Connessione a un Database

### 1. Database Relazionali

Per connettersi a un database relazionale, è necessario utilizzare un driver specifico. Ad esempio, per MySQL, possiamo utilizzare il pacchetto `mysql` o `mysql2`.

```javascript
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database!');
});
```

### 2. Database Non Relazionali

Per MongoDB, utilizziamo il pacchetto `mongoose`, che fornisce un'interfaccia semplice per interagire con il database.

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Could not connect to MongoDB...', err));
```

## Operazioni di Base

### Creazione di Documenti

#### Relazionale

```javascript
const sql = 'INSERT INTO users (name, age) VALUES (?, ?)';
connection.query(sql, ['John Doe', 30], (err, results) => {
  if (err) throw err;
  console.log('User added:', results.insertId);
});
```

#### Non Relazionale

```javascript
const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  age: Number
}));

const user = new User({ name: 'John Doe', age: 30 });
user.save().then(() => console.log('User added!'));
```

### Lettura di Documenti

#### Relazionale

```javascript
connection.query('SELECT * FROM users', (err, results) => {
  if (err) throw err;
  console.log('Users:', results);
});
```

#### Non Relazionale

```javascript
User.find().then(users => console.log('Users:', users));
```

### Aggiornamento di Documenti

#### Relazionale

```javascript
const sql = 'UPDATE users SET age = ? WHERE name = ?';
connection.query(sql, [31, 'John Doe'], (err, results) => {
  if (err) throw err;
  console.log('User updated:', results.affectedRows);
});
```

#### Non Relazionale

```javascript
User.updateOne({ name: 'John Doe' }, { age: 31 }).then(() => console.log('User updated!'));
```

### Cancellazione di Documenti

#### Relazionale

```javascript
const sql = 'DELETE FROM users WHERE name = ?';
connection.query(sql, ['John Doe'], (err, results) => {
  if (err) throw err;
  console.log('User deleted:', results.affectedRows);
});
```

#### Non Relazionale

```javascript
User.deleteOne({ name: 'John Doe' }).then(() => console.log('User deleted!'));
```

## Conclusione

L'integrazione di un database nelle applicazioni Node.js è essenziale per la gestione dei dati. Sia che tu stia utilizzando un database relazionale o non relazionale, Node.js offre strumenti potenti per facilitare queste operazioni. Assicurati di gestire correttamente le connessioni e di implementare pratiche di sicurezza per proteggere i tuoi dati.