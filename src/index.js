const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 8080;

// Conexión a la BD MySQL
const db = mysql.createConnection({
  host: 'db',        // nombre del servicio en docker-compose
  user: 'root',
  password: 'root',
  database: 'hola_mundo'
});

app.get('/', (req, res) => {
  db.query('SELECT "Hola Mundo desde MySQL y Docker!" AS mensaje', (err, results) => {
    if (err) {
      return res.send("Error conectando a la BD: " + err);
    }
    res.send(results[0].mensaje);
  });
});

app.listen(port, () => {
  console.log(`App corriendo en http://localhost:${port}`);
});
