const express = require('express')
const path = require('path')
const logger = require('./middleware/logger')
const exphbs = require('express-handlebars')
const members = require('./Members')

const app = express();

// Init middleware logger
app.use(logger);

// Body parser middleware
app.use(express.json()); // così possiamo inviare json come response
app.use(express.urlencoded({ extended: false })) // per gestire i dati (e.g., json) proveniente da dei form compilati

// Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

/*
Homepage Route (handlebars)
Renderizziamo un template dinamico (ovviamente a questo punto la static folder non fa nulla)
*/
app.get('/', (req, res) => res.render('index', {
    title: 'Memeber Test',
    members
}))

// STATIC FOLDER CODE SECTION

// Chiamata che si fa accedendo al sito (prima prova)
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

// END

// Members API Routes
app.use('/api/members', require('./routes/api/members'));


// Scegliamo la porta a cui ci aspettiamo di ricevere le request
// process.env.PORT serve perchè in produzione diamo priorità ovviamente a quella che è la porta ufficiale
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server stared on port ${PORT}`));