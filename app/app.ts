import express = require('express');

const PORT = process.env.PORT || 3000
const app: express.Application = express();

app.get('/', function (req, res) {
  res.send({
      name: "Bichon API",
      version: "0.0.0"
  });
});

app.listen(PORT, function () {
  console.log(`API is running on port: ${PORT}`);
});