// ./routes/contacts.js
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const databasePath = path.join(__dirname, "../database/db.json");

// Rota para obter todos os contatos
router.get("/contacts", (req, res) => {
  const data = fs.readFileSync(databasePath, "utf-8");
  const contacts = JSON.parse(data).contatos;
  res.json(contacts);
});

// Rota para adicionar um novo contato
router.post("/contacts", (req, res) => {
  const data = fs.readFileSync(databasePath, "utf-8");
  const db = JSON.parse(data);
  const newContact = {
    id: db.contatos.length + 1,
    nome: req.body.nome,
    telefone: req.body.telefone,
  };
  db.contatos.push(newContact);
  fs.writeFileSync(databasePath, JSON.stringify(db, null, 2));
  res.json(newContact);
});

module.exports = router;
