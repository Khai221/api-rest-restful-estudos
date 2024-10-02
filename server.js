const express = require("express");
const app = express();
const data = require("./data.json");

// Verbos HTTP
// GET: Obter dados de um resource
// POST: Enviar dados ou informações para serem processados por um resource
// PUT: Atualizar dados de um resource
// DELETE: Deletar dados de um resource

// https://jsonplaceholder.typicode.com/users pegar todos os usuários fictícios da API para colocar no data.json e usar como base de dados.

app.use(express.json()); // Habilitar o uso do JSON no express para poder enviar e receber dados no formato JSON

app.get("/clients", function (req, res) {
  res.json(data);
});

app.get("/clients/:id", function (req, res) {
  const { id } = req.params;
  const client = data.find((cli) => cli.id == id);

  if (!client) return res.status(204).json();

  res.json(client);
});
app.post("/clients", function (req, res) {});
app.put("/clients/:id", function (req, res) {});
app.delete("/clients/:id", function (req, res) {});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
