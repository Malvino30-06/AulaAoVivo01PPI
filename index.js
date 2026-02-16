import express from "express";

const host = "0.0.0.0";
const porta = 3000;
const app = express(); // oferecendo um servidor http de modo expresso

// rechear o servidor com funcionalidades

app.get("/", (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" concent="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Olá, mundo!</h1>
            <h2>Bem-vindo a página inicial</h2>
        </body>
        </html>
        `);
});

app.get("/horaAtual", (req, res) => {
  const horaAtual = new Date();
  const hora =
    horaAtual.getHours() +
    ":" +
    horaAtual.getMinutes() +
    ":" +
    horaAtual.getSeconds();
  res.send(`<!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" concent="width=device-width, initial-scale=1.0">
            <title>Horário do servidor</title>
        </head>
        <body>
            <h1>Olá, mundo!</h1>
            <h2>Agora são ${hora}</h2>
        </body>
        </html>`);
});

// criar um método que aceita parâmetros

app.get("/tabuada", (req, res) => {
  // tabuada de qual número e até qual sequência?
  const numero = parseInt(req.query.numero);
  const sequencia = parseInt(req.query.sequencia);

  if (!numero || !sequencia) {
    res.send(`<!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" concent="width=device-width, initial-scale=1.0">
            <title>Tabuada</title>
        </head>
        <body>
            <h1>Olá, mundo!</h1>
            <h2>Por favor informe o número e a sequência na URL</h2>
        </body>
        </html>`);
  } else {
    res.write(`<!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" concent="width=device-width, initial-scale=1.0">
            <title>Tabuada</title>
        </head>
        <body>
            <h2>Tabuada do ${numero} até a sequência ${sequencia}.</h2>

            <ul> 
        `);
    for (let i = 0; i <= sequencia; i++) {
      res.write(`
                <li>${numero} X ${i} = ${numero * i} </li>`);
    }

    res.write(`
            </ul>
        </body>
        </html>`);
    res.end(); // finaliza e envia
  }
  console.log("requisição tabuada");
});

app.listen(porta, host, () => {
  console.log(`Servidor escutando em http://${host}:${porta}`);
});
