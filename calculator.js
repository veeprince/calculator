const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req, res) => {
  let num1 = parseInt(req.body.num1, 10);
  let num2 = parseInt(req.body.num2, 10);
  let arithmetic = req.body.arithmetic;
  console.log(req.body.arithmetic);
  switch (arithmetic) {
    case 'add':
      res.send(`${num1 + num2}`);
      break;
    case 'subtract':
      res.send(`${num1 - num2}`);
      break;
    case 'divide':
      res.send(`${num1 / num2}`);
      break;
    case 'multiply':
      res.send(`${num1 * num2}`);
      break;
    default:
      res.send(alert('Invalid choice selected'));
      break;
  }
});

// app.get('/bmicalculator', (req, res) => {
//   res.sendFile(path.join(__dirname, 'bmiCalculator.html'));
// });

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
