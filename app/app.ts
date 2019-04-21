import express = require('express');
import UserRoute from './route/UserRoute'

const PORT = process.env.PORT || 3000
const app: express.Application = express();

app.get('/', function (req, res) {
  res.send({
      name: "Bichon API",
      version: "0.0.0"
  });
});

new UserRoute(app)

app.listen(PORT, function () {
  console.log(`API is running on port: ${PORT}`);
});