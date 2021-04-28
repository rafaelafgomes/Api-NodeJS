const express = require('express');
const bodyParese = require('body-parser');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false}));

require('./app/controllers/index')(app);

app.listen(3000);
