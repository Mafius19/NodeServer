const express = require('express');
const app = express(); //creamos una instancia de express en la const app

app.get('/', function (req, res) {
    res.send('<h1>Welcome to Mafius Domain</h1>');
  });

app.listen(3000); //creamos una instancia de server (simplifica a usar el metodo createServer)