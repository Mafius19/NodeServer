const http = require('http');
const port = 3000;
const hostname = 'localhost';
//imprimimos por pantalla del navegador el mensaje: Wrlcome to Mafius server
//para ello ejecuta server.js con nodemon
const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/plain');
    // res.write('Welcome to Mafius server');
    res.setHeader('Content-Type','text/html');
    res.write('<body class="app"></body>');
    res.write('<h3>Welcome to Mafius server</h3>');
    res.write('<p>This is Node.js course</p>');
    res.end();
});

server.listen(port, hostname,() => {
    console.log(`listening on port ${port}`);
});