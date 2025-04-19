# Environment Variables in Node.js

## Introduzione

In Node.js, le variabili d'ambiente sono utilizzate per configurare l'applicazione senza dover modificare il codice sorgente. Queste variabili possono contenere informazioni sensibili, come chiavi API, credenziali di database e altre configurazioni che non dovrebbero essere hardcoded nel codice. Utilizzare le variabili d'ambiente è una pratica comune per mantenere la sicurezza e la flessibilità delle applicazioni.

## Come accedere alle variabili d'ambiente

In Node.js, le variabili d'ambiente possono essere accessibili tramite l'oggetto `process.env`. Questo oggetto contiene tutte le variabili d'ambiente disponibili per il processo Node.js in esecuzione.

### Esempio di accesso a una variabile d'ambiente

```javascript
const dbPassword = process.env.DB_PASSWORD;
console.log(`La password del database è: ${dbPassword}`);
```

## Impostare variabili d'ambiente

Le variabili d'ambiente possono essere impostate in vari modi, a seconda del sistema operativo e dell'ambiente di esecuzione. Ecco alcuni metodi comuni:

### 1. Utilizzo di un file `.env`

È comune utilizzare un file `.env` per definire le variabili d'ambiente in modo locale. Per utilizzare un file `.env`, è necessario installare un pacchetto come `dotenv`.

#### Installazione di dotenv

```bash
npm install dotenv
```

#### Creazione di un file `.env`

```plaintext
DB_PASSWORD=mysecretpassword
API_KEY=123456789
```

#### Caricamento delle variabili d'ambiente

```javascript
require('dotenv').config();

const dbPassword = process.env.DB_PASSWORD;
console.log(`La password del database è: ${dbPassword}`);
```

### 2. Impostazione manuale nel terminale

Le variabili d'ambiente possono anche essere impostate direttamente nel terminale prima di eseguire l'applicazione.

#### Esempio (Linux/Mac)

```bash
export DB_PASSWORD=mysecretpassword
node app.js
```

#### Esempio (Windows)

```cmd
set DB_PASSWORD=mysecretpassword
node app.js
```

## Vantaggi dell'uso delle variabili d'ambiente

- **Sicurezza**: Le informazioni sensibili non sono esposte nel codice sorgente.
- **Flessibilità**: È possibile cambiare la configurazione senza modificare il codice.
- **Portabilità**: Le stesse variabili d'ambiente possono essere utilizzate in ambienti di sviluppo, test e produzione.

## Conclusione

L'uso delle variabili d'ambiente è fondamentale per la gestione delle configurazioni in Node.js. Permette di mantenere il codice pulito e sicuro, facilitando la gestione delle informazioni sensibili e delle configurazioni specifiche per l'ambiente.