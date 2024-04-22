const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello World! I am a server created by Express.");
});

app.listen(3000, () => {
  console.log("Server started");
});