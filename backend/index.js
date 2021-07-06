const express = require('express');
const mongoose = require('mongoose');
const port = 80

const app = express();
mongoose.Promise = global.Promise;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRoute = require('./routes/user')
const productRoute = require('./routes/product')

mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log("We are connected :")
});

app.use('/', (req,res)=>{
  res.send('Hello World')
});
app.use('/user', userRoute);
app.use('/product', productRoute);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});