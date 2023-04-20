const express = require('express')
const app = express()

app.use = (express.json)

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get('/info',(request,response)=>{
    const length = persons.length
    const currDate = new Date();
    console.log(currDate);
    response.send(
      `<p>phonebook has info for ${length} people</p><br><p>${currDate}</p>`
    );
})
//view all
app.get("/api/persons", (request, response) => {
  response.json(persons);
});
//view by id
app.get("/api/persons/:id",(request,response)=>{
    const id = Number(request.params.id)
    const person = persons.find(person=>(person.id===id))
    if (person) {
    response.json(person);
    } else {
    response.status(404).send("<h1>404 not found</h1>").end();
    }
})
//delete by id
app.delete("/api/persons/:id",(request, response)=>{
    const id = Number(request.params.id)
    persons.filter((person) => person.id != id);
    response.status(404).end();
    console.log("deleted");
});
const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);