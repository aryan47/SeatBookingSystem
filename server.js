const express = require('express')
const path = require('path')
const mongoose = require('mongoose');
const cors = require('cors');
const seatBook = require('./routes/seat-book');
const bodyParser = require('body-parser');
const email = require('./email/email');
const conf = require('./configuration/config.json')

const app = express();
const PORT = process.env.PORT || conf.node.port;

// Connect to mongodb

mongoose.connect(config.mongo.url)
    .then(() => {
        console.log('connected to db');
    })
    .catch(err =>
        console.log(err)
    );
    
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// Used to prevent cors
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));

// Used to serve static angular client side file
app.use(express.static(path.join(__dirname, 'ticket-booking/dist/ticket-booking')));
// Used to redirect `/seats` to seatBook
app.use('/seats', seatBook);
//  Used to redirect `/mail` to email
app.use('/mail', email);

/* handle an uncaught exception & exit the process */
process.on('uncaughtException', function (err) {
    console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
    console.error(err.stack);
    reporter("uncaughtException", (new Date).toUTCString(), err.message, err.stack);
    process.exit(1);
});

/* handle an unhandled promise rejection */
process.on('unhandledRejection', function (reason, promise) {
    console.error('unhandled rejection:', reason.message || reason);

    reporter("uncaughtException", (new Date).toUTCString(), reason.message || reason);
})

// listening on port
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})