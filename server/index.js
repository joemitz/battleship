const express = require('express');
const app = express();
const port = 3000;
const root = '/Users/joemitz/Documents/Code/battleship';

app.use(express.static(`${root}/client/`));

app.listen(port, () => {
  console.log(`Listening at 127.0.0.1:${port}`);
});