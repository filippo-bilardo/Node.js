# Contenuto del file: /nodejs-course/nodejs-course/teoria/02-moduli.md

# Moduli in Node.js

## Introduzione ai Moduli
In Node.js, i moduli sono una parte fondamentale della struttura del codice. Permettono di suddividere il codice in file separati, facilitando la gestione e la manutenzione. Ogni modulo può esportare funzioni, oggetti o variabili, che possono essere importati in altri moduli.

## Tipi di Moduli
Node.js supporta due tipi principali di moduli:

1. **Moduli CommonJS**: Questo è il sistema di moduli predefinito in Node.js. Utilizza le funzioni `require()` per importare moduli e `module.exports` per esportarli.
   
   Esempio:
   ```javascript
   // modulo.js
   const saluta = (nome) => `Ciao, ${nome}!`;
   module.exports = saluta;

   // main.js
   const saluta = require('./modulo');
   console.log(saluta('Mario'));
   ```

2. **Moduli ES6**: Introdotti in ECMAScript 2015, questi moduli utilizzano le parole chiave `import` ed `export`. Node.js supporta i moduli ES6, ma è necessario utilizzare l'estensione `.mjs` o impostare `"type": "module"` nel file `package.json`.

   Esempio:
   ```javascript
   // modulo.mjs
   export const saluta = (nome) => `Ciao, ${nome}!`;

   // main.mjs
   import { saluta } from './modulo.mjs';
   console.log(saluta('Mario'));
   ```

## Creazione di Moduli
Per creare un modulo, basta definire le funzioni o le variabili che si desidera esportare e utilizzare `module.exports` o `export` a seconda del tipo di modulo.

## Importazione di Moduli
Per importare un modulo, si utilizza `require()` per i moduli CommonJS o `import` per i moduli ES6. È possibile importare moduli interni (creati dall'utente) o moduli esterni (librerie installate tramite npm).

## Moduli Nativi
Node.js fornisce diversi moduli nativi, come `fs` (file system), `http`, `path`, e molti altri. Questi moduli possono essere utilizzati senza installazione aggiuntiva.

## Conclusione
I moduli sono essenziali per la scrittura di codice organizzato e riutilizzabile in Node.js. Comprendere come funzionano i moduli e come utilizzarli efficacemente è fondamentale per lo sviluppo di applicazioni scalabili e manutenibili.

## Argomenti Teorici Correlati
- Introduzione a Node.js
- File System in Node.js
- Event Loop in Node.js
- Callbacks e Promises in Node.js
- NPM e gestione dei pacchetti in Node.js