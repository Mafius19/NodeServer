const http = require('http');
const fs = require('fs');
const port = 3000;
const hostname = 'localhost';
//En este caso el servidor leera la pagina index.html con ayuda de fs
//para ello ejecuta server.js con nodemon
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type','text/html');
    fs.readFile('./view/index.html',(err,data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
});

server.listen(port, hostname,() => {
    console.log(`listening on port ${port}`);
});