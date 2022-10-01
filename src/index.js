const express = require("express"); // importa a biblioteca express
const server = express(); //instancia o objeto express

server.use(express.json());

const TaskRoutes = require('./routes/TaskRoutes');

server.get('/teste', (req,res) =>{
  res.send("Ta na teste, mano");
});

server.use('/task', TaskRoutes);
server.listen(3000, () => {
  console.log("Executando...");
});
