const express = require('express');
const path = require('path');

//temp testing purposes only
const Deck  = require('./classes/deck.js')

const port = process.env.PORT || 4000;

const app = express();


app.use('/', express.static(path.join(__dirname, './../client/dist')));

app.get('/api/test', (req, res) => {


  res.end();
})

app.listen(port, ()=> (console.log('listening to port: ', port)));
