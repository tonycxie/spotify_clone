const express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser');

app.use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use(express.static(path.join(__dirname, './public/dist/public')));

require('./server/config/routes')(app);

const server = app.listen(8888, () => { console.log('listening on port 8888'); });