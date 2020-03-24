const express = require('express');

const app = express();

app.get('/', (request,response) => {
    return response.json({
        nome: "Vinicius Alenxadre de Oliveira Zevarex",
        curso: "Nodes.js"
    });
});

app.listen(3333);