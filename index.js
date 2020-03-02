const express = require('express')
const path = require('path')

const app = express();

// STATIC FOLDER CODE SECTION --------------------------------------------------------------------

// Chiamata che si fa accedendo al sito
// app.get('/', (req, res) => {
//     // res.send('<h1>Hello world!!</h1>');
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

/*
// Set static folder
// Settima una cartella come static e così non dobbiamo manualmente impostare tutte le chiamate ai vari
// file html del nostro sito (come visto nelle chiamata iniziate app.get('/', ...))
*/
app.use(express.static(path.join(__dirname, 'public')))

// END --------------------------------------------------------------------------------------------


// API CODE SECTION --------------------------------------------------------------------

// Json file hard-coded in modo da semplicare il progetto (si può sempre prendere da db se lo si desidera)
const members = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        status: 'active'
    },
    {
        id: 2,
        name: 'Bon Doe',
        email: 'bob@gmail.com',
        status: 'inactive'
    },
    {
        id: 3,
        name: 'Shannon Doe',
        email: 'shannon@gmail.com',
        status: 'active'
    }]

// Esempio di chiamata postman GET: http://localhost:5000/api/members che restituisce oggetti json
// Gets All Members
app.get('/api/members', (req, res) => res.json(members))

// END --------------------------------------------------------------------------------------------


// Scegliamo la porta a cui ci aspettiamo di ricevere le request
// process.env.PORT serve perchè in produzione diamo priorità ovviamente a quella che è la porta ufficiale
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server stared on port ${PORT}`));