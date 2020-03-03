const moment = require('moment')

// Ogni volta che viene fatta una richiesta viene richiamato questo middleware
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next(); // per passare al prossimo middleware (nel caso ci sia)
}

module.exports = logger;