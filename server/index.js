let express = require(`express`);
let cors = require(`cors`);

let app = express();

app.use(express.json());
app.use(cors());

let character = [
  {
    name: `Harry Potter`,
    power: 1000,
    id: 0,
  },
  {
    name: `Voldemort`,
    power: 999,
    id: 1,
  },
  {
    name: `Hermione`,
    power: 1000,
    id: 2,
  },
];

let id = 3;

app.post(`/api/character`, (req, res) => {
  let newChar = { ...req.body, id };
  character.push(newChar);
  res.status(200).send(character);
  id++;
});

app.get(`/api/character`, (req, res) => {
  res.status(200).send(character);
});

app.delete(`/api/character/:id`, (req, res) => {
  id = +req.params.id;
  let index;
  for (let i = 0; i < character.length; i++) {
    if (character[i].id === id) {
      index = i;
    }
  }

  if (index !== undefined) {
    character.splice(index, 1);
    res.status(200).send(character);
  } else {
    res.status(400).send("Nothing to delete");
  }
});

app.listen(4000, console.log(`The server is running on 4000`));
