const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const userRoute = require('./routes/user')
const productRoute = require('./routes/product')

const port = 3001
const app = express();

mongoose.Promise = global.Promise;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())


mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("We are connected :")
});

app.use('/user', userRoute);
app.use('/product', productRoute);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});