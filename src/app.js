const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/calcular", (req, res) => {
  const valor = parseInt(req.body.number);
  const result = Calc(valor);
  res.send(`
  <body style="display: flex; align-items: center; justify-content: center; height: 100svh; flex-direction:column">
    <p style="font-family:Verdana, Geneva, Tahoma, sans-serif; font-weight: 600">O somatório de ${valor} é:</p>
    <p style="font-family:Verdana, Geneva, Tahoma, sans-serif; font-weight: 600">${result}</p>
  </body>
  `);
});

function Calc(limit) {
  let sum = 0;
  for (let i = 1; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

app.listen(port, () => {
  console.log(`Utilize está URL: http://localhost:${port}`);
});
