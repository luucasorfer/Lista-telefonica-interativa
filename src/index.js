const express = require("express");
const app = express();
const routes = require("../routes/routes.js"); // Importe as rotas personalizadas
const contactRoutes = require("../routes/contacts.js"); // Importe as rotas de contatos

const port = process.env.PORT || 3000;

app.use(express.json()); // Habilita o uso do JSON no corpo das requisições

app.use("/", routes); // Use as rotas personalizadas
app.use("/api", contactRoutes); // Prefixo "/api" para as rotas de contatos 

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
