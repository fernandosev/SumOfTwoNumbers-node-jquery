//imortacao da biblioteca express
const express = require('express');

//instancia um objeto express
const app = express();

//endpoint sum retorna a soma de dois numeros passados como parametro na URL
//ex.: http://localhost:3333/sum?x=2&y=3
app.get('/sum', (request, response) => {
    //pega os numeros x e y passados como parametro na URL
    const x = Number(request.query.x);
    const y = Number(request.query.y);

    //retorna para o cliente a soma de x e y
    response.send(String(x+y));
});

//retorna a pagina noButtonInSum.html (exercicio 3) para o cliente
app.get('/sum2', (request, response) => {
    response.sendFile(`${__dirname}/noButtonOnSum.html`);
});

//retorna a pagina index.html (exercicio 2) para o cliente
app.get('/', (request, response) => {
    response.sendFile(`${__dirname}/index.html`);
});

//Executa o servidor na porta 3333 de localhost
app.listen(3333);