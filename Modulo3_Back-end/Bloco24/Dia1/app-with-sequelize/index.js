const express = require('express');

const app = express();

app.use(express.json());

app.use('/users', require('./controllers/userController'));

const PORT = 3005;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});