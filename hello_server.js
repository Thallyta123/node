var http = require('http');

var atendeRequisicao = function(request, response) {
    response.writeHead(200, {"Content-type": "text/html"});
    response.write("<h1>Hello World!</h1>");
    response.end();
}

var server = function() {
    console.log('Servidor Hello World rodando!');
}
server.listen(3000, servidorLigou);

