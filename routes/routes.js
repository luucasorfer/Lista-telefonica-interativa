// routes.js
const express = require("express");
const path = require("path");
const router = express.Router();

// Servindo o arquivo "index.html"
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/index.html"));
});

// Servindo o arquivo "app.js"
router.get("/js/app.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/js/app.js"));
});

// Servindo arquivos de estilo CSS
router.get("/styles/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/styles/style.css"));
});

// Servindo imagens
router.get("/images/image.jpg", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/images/image.jpg"));
});

module.exports = router;