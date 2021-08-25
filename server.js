const http = require('http');
const fs = require('fs');
const port = 3000;
const hostname = 'localhost';

//En este caso el servidor leera la url solicitada y en base a esta cargara entre 3 posibles htmls ubicados en views
//Se agregó el status code en res para cisualizar en la consola del navegador section network
//para ello ejecuta server.js con nodemon
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    let route = './views/';

    switch (req.url) {
        case '/':
            route += 'index.html';
            res.statusCode = 200;
            break;
        case '/contact':
            route += 'contact.html';
            res.statusCode = 200;
            break;
        case '/contact-us':
            // route += 'contact.html';
            res.statusCode = 301;
            res.setHeader('Location','/contact');
            res.end();
            break;
        default:
            route += '404.html';
            res.statusCode = 404;
            break;
    }
    fs.readFile(route, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`listening on port ${port}`);
});