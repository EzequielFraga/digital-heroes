const express = require("express");

const app = express();

let heroes = require("./heroes.json");

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running in ${PORT} port`));

app.get('/', function(req, res){
 res.send("Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Héroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.");
});

app.get("/heroes", function(req, res) {
    res.send(heroes);
  });

app.get("/creditos", function(req, res){
res.send("Ezequiel Fraga, Live a life you will remember");
});

app.get('*', function(req, res)  {
    res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
  });
  