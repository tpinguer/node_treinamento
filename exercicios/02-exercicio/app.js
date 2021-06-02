const http = require('http');
const fs = require('fs');

const server = http.createServer(
    (request, response) => {
        let file = '';

        if (request.url === '/') {
            file = 'index.html';
        } else if (request.url === '/sobre') {
            file = 'sobre.html'
        } else if (request.url === '/salve') {
            file = 'salve.html'
        } else {
            file = 'erro.html'
        }
        if (fs.existsSync(file)) {
            fs.readFile(file, 
                (erro, dados) => {
                    if (erro) {
                        throw erro;
                    } else {
                        response.end(dados);
                    }
                }
            );    
        } else {
            response.write(`Ocorreu um erro no arquivo ${file}`);
            response.end();
        }
    }
);


server.listen(3000, ()=> {console.log("Serve online - port : 3000")});
